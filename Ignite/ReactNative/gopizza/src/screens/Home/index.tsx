import { Alert, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  MenuItensNumber,
  MenuTitle,
  MenuHeader,
  NewPoductButton,
} from "./styles";
import Emoji from "@assets/happy.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import Search from "@components/Search";
import ProductCard, { ProductProps } from "@components/ProductCard";
import firestore from "@react-native-firebase/firestore";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/auth";

const Home = () => {
  const { user, signOut} = useAuth();
  const { COLORS } = useTheme();
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  function fatchPizzas(value: string) {
    const formatedValue = value.toLowerCase().trim();
    firestore()
      .collection("pizzas")
      .orderBy("name_insensitive")
      .startAt(formatedValue)
      .endAt(`${formatedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setPizzas(data);
      })
      .catch(() =>
        Alert.alert("Consulta", "Não foi possivel realizar a consulta")
      );
  }

  function handleSearch() {
    fatchPizzas(search);
  }

  function handleClear() {
    setSearch("");
    fatchPizzas("");
  }

  function handleOpen(id: string) {
    navigation.navigate("product", { id });
  }

  function handleAddPizza() {
    navigation.navigate("product", {});
  }

  useFocusEffect(
    useCallback(() => {
      fatchPizzas("");
    }, [])
  );

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={Emoji} />
          <GreetingText>Olá, {user?.name} </GreetingText>
        </Greeting>
        <TouchableOpacity onPress={signOut} >
          <MaterialIcons 
          color={COLORS.TITLE} 
          name="logout" 
          size={18}
          />
        </TouchableOpacity>
      </Header>
      <Search
        onClear={handleClear}
        onSearch={handleSearch}
        onChangeText={setSearch}
        value={search}
      />
      <MenuHeader>
        <MenuTitle>Cardápio</MenuTitle>
        <MenuItensNumber>
          {pizzas.length > 1
            ? `${pizzas.length} pizzas`
            : `${pizzas.length} pizza`}
        </MenuItensNumber>
      </MenuHeader>
      <FlatList
      
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard data={item} onPress={() => handleOpen(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />
      {
        user?.isAdmin && (
          <NewPoductButton
            title="Cadastrar Pizza"
            type="secondary"
            onPress={handleAddPizza}
          />
        )
      }
    </Container>
  );
};

export default Home;

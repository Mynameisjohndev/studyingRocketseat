import React, { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import { orderNavigationProps } from "@src/@types/navigation";
import { Alert, Platform } from "react-native";
import {
  Container,
  Header,
  Photo,
  Sizes,
  Form,
  Title,
  FormRow,
  InputGroup,
  Label,
  Price,
  ContentScroll,
} from "./styles";
import ButtonBack from "@components/ButtonBack";
import RadioButton from "@components/RadioButton";
import Button from "@components/Button";
import Input from "@components/Input";
import { PIZZA_TYPES } from "@utils/pizzaTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductProps } from "@components/ProductCard";
import { useAuth } from "@hooks/auth";

type PizzaResponse = ProductProps & {
  price_size: {
    [key: string]: number;
  };
};

const Order = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, setTableNumber] = useState("");
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
  const [sendingOrder, setSendingOrder] = useState(false);

  const { user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as orderNavigationProps;
  const amount = selectedItem
    ? pizza.price_size[selectedItem] * quantity
    : "00,00";

  function handleBack() {
    navigation.goBack();
  }

  async function handleOrder() {
    if (!selectedItem) {
      return Alert.alert("Produto", "Selecione o tamanho da pizza");
    }
    if (!tableNumber) {
      return Alert.alert("Produto", "Informe o número da mesa");
    }
    if (!quantity) {
      return Alert.alert("Produto", "Informe a quantidadE");
    }
    setSendingOrder(true);
    firestore()
      .collection("orders")
      .add({
        quantity,
        table_number: tableNumber,
        selectedItem,
        amount,
        pizza: pizza.name,
        status: "Preparando",
        waiter_id: user?.id,
        image: pizza.photo_url,
      })
      .then(() => navigation.navigate("home"))
      .catch((error) => {
        Alert.alert("Pedido", "Não foi possível realizar o pedido");
        setSendingOrder(false);
      });
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => setPizza(response.data() as PizzaResponse))
        .catch((error) =>
          Alert.alert("Produto", "Não foi possível carregar o produto")
        );
    }
  }, []);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack onPress={handleBack} style={{ marginBottom: 108 }} />
        </Header>
        <Photo source={{ uri: pizza.photo_url }} />
        <Form>
          <Title>{pizza.name}</Title>
          <Label>Selecione um tamanho</Label>
          <Sizes>
            {PIZZA_TYPES.map((pizza) => (
              <RadioButton
                key={pizza.id}
                onPress={() => setSelectedItem(pizza.id)}
                selected={selectedItem === pizza.id}
                title={pizza.name}
              />
            ))}
          </Sizes>

          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>
              <Input keyboardType="numeric" onChangeText={setTableNumber} />
            </InputGroup>
            <InputGroup>
              <Label>Quantidade</Label>
              <Input
                keyboardType="numeric"
                onChangeText={(value) => setQuantity(Number(value))}
              />
            </InputGroup>
          </FormRow>
          <Price>Valor de R$ {amount}</Price>
          <Button 
          title="Confirmar pedido" 
          onPress={handleOrder}
          isLoading={sendingOrder}
          />
        </Form>
      </ContentScroll>
    </Container>
  );
};

export default Order;

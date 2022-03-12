import OrderCard from "@components/OrderCard";
import ItemSeparator from "@components/ItemSeparator";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import {
  Container,
  Header,
  Title,
} from "./styles";

const Orders = () => {
  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <FlatList
      data={["1","2","3"]}
      keyExtractor={item => item}
      renderItem={({item, index}) => <OrderCard index={index}/>}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 24,paddingBottom: 125}}
      ItemSeparatorComponent={() => <ItemSeparator/>}
      />
    </Container>
  );
};

export default Orders;

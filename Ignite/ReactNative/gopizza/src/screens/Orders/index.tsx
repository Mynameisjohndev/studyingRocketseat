import React, { useEffect, useState } from "react";
import OrderCard, { orderProps } from "@components/OrderCard";
import firestore from "@react-native-firebase/firestore";
import ItemSeparator from "@components/ItemSeparator";
import { FlatList, Alert } from "react-native";
import { useAuth } from "@hooks/auth";

import { Container, Header, Title } from "./styles";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrder] = useState<orderProps[]>([]);

  function handlePizzaDelivered(id: string) {
    Alert.alert("Pedido", "Confirmar que o pedido foi entregue?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          firestore()
          .collection("orders") 
          .doc(id)
          .update({
            status: "Entregue"
          })       
        },
      },
    ]);
  }

  useEffect(() => {
    const subscribe = firestore()
      .collection("orders")
      .where("waiter_id", "==", user?.id)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as orderProps[];
        setOrder(data);
      });
    return () => subscribe();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === "Entregue"}
            onPress={() => handlePizzaDelivered(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Container>
  );
};

export default Orders;

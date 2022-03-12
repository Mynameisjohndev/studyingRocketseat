import React, { useState } from "react";
import { Platform } from "react-native";
import { Container, Header, Photo, Sizes } from "./styles";
import ButtonBack from "@components/ButtonBack";
import RadioButton from "@components/RadioButton";
import { PIZZA_TYPES } from "@utils/pizzaTypes";

const Order = () => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack onPress={() => {}} style={{ marginBottom: 108 }} />
      </Header>
      <Photo source={{ uri: "http://github.com/Myanameisjohndev.png" }} />
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
    </Container>
  );
};

export default Order;

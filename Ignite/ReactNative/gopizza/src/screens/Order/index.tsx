import { Platform } from "react-native";
import React from "react";
import { Container, Header, Photo, Sizes } from "./styles";
import ButtonBack from "@components/ButtonBack";
import RadioButton from "@components/RadioButton";

const Order = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack onPress={() => {}} style={{ marginBottom: 108 }} />
      </Header>
      <Photo source={{ uri: "http://github.com/Myanameisjohndev.png" }} />
      <Sizes>
        <RadioButton selected={true} title="Pequena" />
        <RadioButton selected={false} title="Média" />
        <RadioButton selected={false} title="Grande" />
      </Sizes>
    </Container>
  );
};

export default Order;

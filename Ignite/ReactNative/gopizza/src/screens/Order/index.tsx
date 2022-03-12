import React, { useState } from "react";
import { Platform } from "react-native";
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
import { useNavigation } from "@react-navigation/native";

const Order = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack onPress={handleBack} style={{ marginBottom: 108 }} />
        </Header>
        <Photo source={{ uri: "http://github.com/Myanameisjohndev.png" }} />
        <Form>
          <Title>Nome da pizza</Title>
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
              <Input keyboardType="numeric" />
            </InputGroup>
            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
          </FormRow>
          <Price>Valor de R$ 90,90</Price>
          <Button title="Confirmar pedido" />
        </Form>
      </ContentScroll>
    </Container>
  );
};

export default Order;

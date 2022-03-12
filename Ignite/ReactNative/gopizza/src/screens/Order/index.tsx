import { Platform } from 'react-native'
import React from 'react'
import { Container, Header } from './styles';
import ButtonBack from '@components/ButtonBack';

const Order = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Header>
            <ButtonBack
                onPress={() => {}}
                style={{marginBottom: 108}}
            />
        </Header>
    </Container>
  )
}

export default Order;
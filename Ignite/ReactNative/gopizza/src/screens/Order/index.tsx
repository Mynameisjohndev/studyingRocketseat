import { Platform } from 'react-native'
import React from 'react'
import { Container } from './styles';

const Order = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>

    </Container>
  )
}

export default Order;
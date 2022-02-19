import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { Container, Header, Title, DeleteLabel } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <Title>Home</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  )
}

export default Product
import Photo from '@components/Photo';
import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import ButtonBack from '../ButtonBack';
import { Container, Header, Title, DeleteLabel } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack/>
        <Title>Home</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Photo uri="https://github.com/Myanameisjohndev.png"/>
    </Container>
  )
}

export default Product
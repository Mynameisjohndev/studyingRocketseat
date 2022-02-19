import Photo from '@components/Photo';
import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import ButtonBack from '../ButtonBack';
import { Container, Header, Title, DeleteLabel, Upload, PickImageButton } from './styles';

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack />
        <Title>Home</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Upload>
        <Photo uri="https://github.com/Myanameisjohndev.png" />
        <PickImageButton type="secondary" title='Carregar'/>
      </Upload>
    </Container>
  )
}

export default Product
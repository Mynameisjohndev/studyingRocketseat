import React, { useState } from 'react'
import Photo from '@components/Photo';
import { TouchableOpacity, Platform, ScrollView } from 'react-native'
import ButtonBack from '../ButtonBack';
import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacteres,
} from './styles';
import * as ImagePicker from 'expo-image-picker'
import InputPrice from '@components/ImputPrice';
import Input from '@components/Input';
import Button from '@components/Button';

const Product = () => {

  const [image, setImage] = useState('');

  async function handlePickImage() {
    console.log("teste")
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4]
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }


    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Home</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <Upload>
          <Photo uri={image} />
          <PickImageButton onPress={handlePickImage} type="secondary" title='Carregar' />
        </Upload>
        <Form>
          <InputGroup>
            <Label>Home</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacteres>0 a 60 caracteres</MaxCharacteres>
            </InputGroupHeader>
            <Input multiline maxLength={60} style={{ height: 80 }} />
          </InputGroup>
          <InputGroup>
            <Label>Tamanhos e preços</Label>
            <InputPrice size="P" />
            <InputPrice size="M" />
            <InputPrice size="G" />
          </InputGroup>
          <Button title='Cadastrar pizza' />
        </Form>
      </ScrollView>
    </Container>
  )
}

export default Product
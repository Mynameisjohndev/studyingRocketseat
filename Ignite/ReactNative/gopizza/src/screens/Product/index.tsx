import React, { useState } from 'react'
import Photo from '@components/Photo';
import { TouchableOpacity, Platform } from 'react-native'
import ButtonBack from '../ButtonBack';
import { Container, Header, Title, DeleteLabel, Upload, PickImageButton } from './styles';
import * as ImagePicker from 'expo-image-picker'
import InputPrice from '@components/ImputPrice';

const Product = () => {

  const[image, setImage] = useState('');

  async function handlePickImage(){
    console.log("teste")
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status === 'granted'){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4,4]
      });

      if(!result.cancelled){
        setImage(result.uri);
      }


    }
  }

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
        <Photo uri={image}/>
        <PickImageButton onPress={handlePickImage} type="secondary" title='Carregar'/>
      </Upload>
      <InputPrice size="P"/>
      <InputPrice size="M"/>
      <InputPrice size="G"/>
    </Container>
  )
}

export default Product
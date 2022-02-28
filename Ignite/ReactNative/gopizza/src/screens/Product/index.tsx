import React, { useState } from 'react'
import Photo from '@components/Photo';
import { 
TouchableOpacity, 
Platform, 
ScrollView, 
Alert 
} from 'react-native'
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
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { productNavigationProps } from '@src/@types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';

const Product = () => {

  const route = useRoute();
  const { id } = route.params as productNavigationProps;
  console.log(id);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePickImage() {
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

  async function handleAdd(){
    if(!name.trim()){
      return Alert.alert('Cadastro', 'Informe o nome da pizza.');
    }
    if(!description.trim()){
      return Alert.alert('Cadastro', 'Informe a descrição da pizza.');
    }
    if(!image.trim()){
      return Alert.alert('Cadastro', 'Informe a imagem da pizza.');
    }
    if(!priceSizeP.trim() || !priceSizeM.trim() || !priceSizeG.trim()){
      return Alert.alert('Cadastro', 'Informe o preço de todos tamanhos de pizza.');
    }
    setIsLoading(true);
    const filename = new Date().getTime();
    const reference = storage().ref(`/pizzas/${filename}.png`);
    await reference.putFile(image);
    const photo_url = await reference.getDownloadURL();
    firestore()
    .collection('pizzas')
    .add({
      name,
      name_insensitive: name.toLowerCase().trim(),
      description,
      price_size: {
        p: priceSizeP,
        m: priceSizeM,
        g: priceSizeG
      },
      photo_url,
      photo_path: reference.fullPath,
    })
    .then(()=>Alert.alert('Cadastro', 'Pizza cadastrada com sucesso.'))
    .catch(()=>Alert.alert('Cadastro', 'Não foi possível cadastrar a pizza.'))
    setIsLoading(false);
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
            <Label>Nome</Label>
            <Input
              onChangeText={setName}
              value={name} />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacteres>0 a 60 caracteres</MaxCharacteres>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
              value={description} />
          </InputGroup>
          <InputGroup>
            <Label>Tamanhos e preços</Label>

            <InputPrice
              size="P"
              onChangeText={setPriceSizeP}
              value={priceSizeP} />

            <InputPrice
              size="M"
              onChangeText={setPriceSizeM}
              value={priceSizeM} />

            <InputPrice
              size="G"
              onChangeText={setPriceSizeG}
              value={priceSizeG} />

          </InputGroup>
          <Button 
          title='Cadastrar pizza' 
          isLoading={isLoading}
          onPress={handleAdd}
          />
        </Form>
      </ScrollView>
    </Container>
  )
}

export default Product
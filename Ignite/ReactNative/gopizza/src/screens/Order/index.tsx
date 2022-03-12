import { Platform } from 'react-native'
import React from 'react'
import { Container, Header, Photo} from './styles';
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
        <Photo source={{uri: "http://github.com/Myanameisjohndev.png"}}/>
        
    </Container>
  )
}

export default Order;
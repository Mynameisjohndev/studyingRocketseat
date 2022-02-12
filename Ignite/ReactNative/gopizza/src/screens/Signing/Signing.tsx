import { KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { 
Container, 
Content, 
Title, 
Brand,
ForgotPassword, 
ForgotPasswordLabel 
} from './styles'
import Input from '@components/Input'
import Button from '@components/Button'
import BrandImage from '@assets/brand.png';

const Signing = () => {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={BrandImage}/>
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Input
            placeholder="Password"
            type='secondary'
            secureTextEntry
          />

          <ForgotPassword>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPassword>
          
          <Button
            title="Entrar"
            type="secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Signing
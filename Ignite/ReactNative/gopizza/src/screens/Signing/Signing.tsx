import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
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
import { useAuth } from '@hooks/auth';

const Signing = () => {

  const {  signin, isLogging, forgotPassword } = useAuth();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  function handleSignin(){
    signin(email, password);
  }

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
            onChangeText={setEmail}
            />
          <Input
            placeholder="Password"
            type='secondary'
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPassword>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPassword>
          
          <Button
            title="Entrar"
            type="secondary"
            isLoading={isLogging}
            onPress={handleSignin}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Signing
import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'
import Input from '@components/Input'
import Button from '@components/Button'

const Signing = () => {
  return (
    <Container>
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
      <Button 
      title="Entrar"
      type="secondary"
      />
    </Container>
  )
}

export default Signing
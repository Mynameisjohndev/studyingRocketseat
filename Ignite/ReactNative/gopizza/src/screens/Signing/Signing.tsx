import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'
import Input from '@components/Input'

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
    </Container>
  )
}

export default Signing
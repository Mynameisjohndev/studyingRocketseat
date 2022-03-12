import React from 'react'
import { TouchableOpacityProps } from "react-native"
import { 
Container, 
RadioButtonProps, 
Title, 
Radio, 
Selected,
} from './styles';

type Props = TouchableOpacityProps & RadioButtonProps &{
    title: string,
}

const RadioButton = ({title, selected = false, ...rest}: Props) => {
  return (
    <Container selected={selected} {...rest} >
        <Radio>{selected && <Selected/>}</Radio>
        <Title>{title}</Title>
    </Container>
  )
}

export default RadioButton;
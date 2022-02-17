import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Load, Typeprops } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: Typeprops;
    isLoading?: boolean;
}

const Button = ({ 
    title, 
    type='primary', 
    isLoading = false, 
    ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
        {isLoading ? <Load/> : <Title>{title}</Title>}
    </Container>
  )
}

export default Button;
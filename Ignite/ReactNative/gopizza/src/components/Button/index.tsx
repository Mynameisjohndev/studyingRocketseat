import React from 'react'
// import { RectButtonProps } from 'react-native-gesture-handler';
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
    <Container type={type} enabled={!isLoading} {...rest}>
        {isLoading ? <Load/> : <Title>{title}</Title>}
    </Container>
  )
}

export default Button;
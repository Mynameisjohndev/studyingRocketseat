import React from 'react'
import { RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Container, Title, Load, Typeprops } from './styles';

type Props = RectButtonProps & {
  title: string;
  type?: Typeprops;
  isLoading?: boolean;
}

const Button = ({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Container type={type} {...rest}>
        {isLoading ? <Load /> : <Title>{title}</Title>}
      </Container>
    </GestureHandlerRootView>
  )
}

export default Button;
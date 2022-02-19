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
    <Container type={type} {...rest}>
      <GestureHandlerRootView>
        {isLoading ? <Load /> : <Title>{title}</Title>}
      </GestureHandlerRootView>
    </Container>
  )
}

export default Button;
import React from 'react'
import { TouchableOpacityProps } from "react-native"
import {
Container,
Description,
Image,
Name,
StatusContainer,
StatusLabel,
StatusTypeProps,
} from "./styles";

type Props = TouchableOpacityProps &{
    index: number;
}

const OrderCard = ({index, ...rest}: Props) => {
  return (
    <Container index={index} {...rest}>
        <Image source={{ uri: "http://github.com/Myanameisjohndev.png"}}/>
        <Name>Quatro queijos</Name>
        <Description>
            Mesa 5 🞄 Qnt: 1
        </Description>
        <StatusContainer status='Entregue'>
            <StatusLabel status='Entregue'>Preparando</StatusLabel>
        </StatusContainer>
    </Container>
  )
}

export default OrderCard
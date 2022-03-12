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

export type orderProps = {
  id: string;
  pizza: string;
  image: string;
  status: StatusTypeProps,
  table_number: string;
  quantity: string;
}

type Props = TouchableOpacityProps &{
    index: number;
    data: orderProps;
}

const OrderCard = ({index, data,...rest}: Props) => {
  return (
    <Container index={index} {...rest}>
        <Image source={{ uri: data.image}}/>
        <Name>{data.pizza}</Name>
        <Description>
            Mesa {data.table_number} 🞄 Qnt: {data.quantity}
        </Description>
        <StatusContainer status={data.status}>
            <StatusLabel status={data.status}>{data.status}</StatusLabel>
        </StatusContainer>
    </Container>
  )
}

export default OrderCard;
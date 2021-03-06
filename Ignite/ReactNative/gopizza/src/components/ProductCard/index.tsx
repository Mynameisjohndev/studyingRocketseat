import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from 'styled-components';
import { Feather } from "@expo/vector-icons";
import {
    Container,
    Content,
    Description,
    Details,
    Image,
    Line,
    Name,
    Identification
} from './styles';

export type ProductProps = {
    id: string;
    photo_url: string;
    name: string;
    description: string;
}

type Props = RectButtonProps & {
    data: ProductProps;
}

const ProductCard = ({ data, ...rest }: Props) => {
    const { COLORS } = useTheme();

    return (
        <GestureHandlerRootView>
            <Container>
                <Content {...rest}>
                    <Image source={{ uri: data.photo_url }} />
                    <Details>
                        <Identification>
                            <Name>{data.name}</Name>
                            <Feather name='chevron-right' size={18} color={COLORS.SHAPE} />
                        </Identification>
                        <Description>{data.description}</Description>
                    </Details>
                </Content>
                <Line />
            </Container>
        </GestureHandlerRootView>

    )
}

export default ProductCard;
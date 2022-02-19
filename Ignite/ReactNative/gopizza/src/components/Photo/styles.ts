import styled, { css } from "styled-components/native";
import theme from '@src/theme';

export const ImageProfile = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`
export const PlaceHolder = styled.View`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${({theme}) => theme.COLORS.SECONDARY_900};
`

export const PlaceHolderTitle = styled.Text`
    font-size: 14px;
    text-align: center;
    ${({theme}) => css`
        color: ${theme.COLORS.SECONDARY_900}
        font-family: ${theme.FONTS.TEXT}    
    `}
`

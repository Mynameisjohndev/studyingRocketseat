import styled, { css } from 'styled-components/native';
import theme from '@src/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
`

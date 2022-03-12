import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

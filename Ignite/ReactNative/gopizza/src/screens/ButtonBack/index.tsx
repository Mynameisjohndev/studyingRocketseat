import React from 'react';
import { StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

const ButtonBack = ({ ...rest }: TouchableOpacityProps) => {
    const { COLORS } = useTheme();
    return (
        <Container {...rest}>
            <MaterialIcons name='chevron-left' size={18} color={COLORS.TITLE} />
        </Container>
    )
}

export default ButtonBack

const styles = StyleSheet.create({})
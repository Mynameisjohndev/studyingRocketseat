import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ButtonClear, Container, ImputArea, Input, Button } from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type Props = TextInputProps & {
    onSearch: () => void;
    onClear: () => void;
};

const Search = ({ onSearch, onClear, ...rest }: Props) => {
    const { COLORS } = useTheme();
    return (
        <Container>
            <ImputArea>
                <Input placeholder='Pesquisar...' {...rest} />
                <ButtonClear onPress={onClear}>
                    <Feather name='x' size={16} />
                </ButtonClear>
            </ImputArea>
            <GestureHandlerRootView>
                <Button onPress={onSearch}>
                    <Feather name='search' size={16} color={COLORS.TITLE} />
                </Button>
            </GestureHandlerRootView>
        </Container>
    )
}

export default Search;
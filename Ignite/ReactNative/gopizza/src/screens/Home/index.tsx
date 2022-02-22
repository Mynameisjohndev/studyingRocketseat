import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Container,
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText,
} from './styles'
import Emoji from '@assets/happy.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Search from '@components/Search';

const Home = () => {
    const { COLORS } = useTheme();
    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji source={Emoji} />
                    <GreetingText>Olá, Admin </GreetingText>
                </Greeting>
                <TouchableOpacity>
                    <MaterialIcons color={COLORS.TITLE} name="logout" size={18} />
                </TouchableOpacity>
            </Header>
            <Search onClear={() => { }} onSearch={() => { }} />
        </Container>
    )
}

export default Home;
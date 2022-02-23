import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {
    Container,
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText,
    MenuItensNumber,
    MenuTitle,
    MenuHeader,
} from './styles'
import Emoji from '@assets/happy.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Search from '@components/Search';
import ProductCard, { ProductProps } from '@components/ProductCard';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
    const { COLORS } = useTheme();

    function fatchPizzas(value: string) {
        const formatedValue = value.toLowerCase().trim();
        firestore()
            .collection('pizzas')
            .orderBy('name_insensitive')
            .startAt(formatedValue)
            .endAt(`${formatedValue}\uf8ff`)
            .get()
            .then(response => {
                const data = response.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as ProductProps[];
                console.log(data)
            })
            .catch(()=> Alert.alert('Consulta', 'Não foi possivel realizar a consulta'));
    }

    useEffect(()=>{
        fatchPizzas('');
    },[])

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
            <MenuHeader>
                <MenuTitle>Cardápio</MenuTitle>
                <MenuItensNumber>10 pizzas</MenuItensNumber>
            </MenuHeader>
            <ProductCard data={{ id: '1', name: 'Pizza', description: 'Teste de descrição', photo_url: 'https://2.bp.blogspot.com/-wNgz-XOKW_o/Um-krPebaNI/AAAAAAAAKbI/NM3fmL-j6Vo/s1600/pizza_de_chourico_com_tomate_cereja_e_queijo_President_vista_de_cima.jpg' }} />
        </Container>
    )
}

export default Home;
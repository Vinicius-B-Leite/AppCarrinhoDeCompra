import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import bmw from '../../assets/bmw.png'
import bmw2 from '../../assets/bmw2.png'
import ferrari from '../../assets/ferrari.png'
import ferrari2 from '../../assets/ferrari2.png'
import gol from '../../assets/gol.png'
import { Container, Header, Name, MostPopular, MostPopularTitle, Products, ProductsTitle, Icons } from './styles';
import PopularProducts from '../../components/PopularProducts';
import HomeListProducts from '../../components/HomeListProducts';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const [produtosPopulares, setPordutosPopulares] = useState([
        {
            id: '1',
            imagem: require('../../assets/gol.png'),
            nome: 'Need for speed',
            preco: 1000.99
        },
        {
            id: '2',
            imagem: require('../../assets/bmw2.png'),
            nome: 'Carro BMW 2',
            preco: 800.99
        },
        {
            id: '3',
            imagem: require('../../assets/ferrari.png'),
            nome: 'Carro Ferrari',
            preco: 500.99
        }
    ])
    const [products, setProducts] = useState([
        {
            id: '1',
            imagem: require('../../assets/bmw.png'),
            nome: 'Carro BMW',
            preco: 500.99
        },
        {
            id: '2',
            imagem: require('../../assets/bmw2.png'),
            nome: 'Carro BMW 2',
            preco: 800.99
        },
        {
            id: '3',
            imagem: require('../../assets/ferrari.png'),
            nome: 'Carro Ferrari',
            preco: 500.99
        },
        {
            id: '4',
            imagem: require('../../assets/ferrari2.png'),
            nome: 'Carro Ferrari 2',
            preco: 800.99
        },
        {
            id: '5',
            imagem: require('../../assets/ferrari.png'),
            nome: 'Carro Ferrari',
            preco: 500.99
        },
        {
            id: '6',
            imagem: require('../../assets/gol.png'),
            nome: 'Need for Speed',
            preco: 1000.99
        },

    ])
    const navigation = useNavigation()
    return (
        <Container>
            <Header>
                <Name>Olá, Fulano!</Name>
                <Icons>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <AntDesign name="shoppingcart" size={28} color="#fff" />
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <AntDesign name="user" size={28} color="#fff" />
                    </TouchableOpacity>
                </Icons>
            </Header>

            <MostPopular>
                <MostPopularTitle>Os mais populares</MostPopularTitle>
                <FlatList
                    data={produtosPopulares}
                    keyExtractor={item => item.id}
                    renderItem={item => <PopularProducts item={item} />}
                    ItemSeparatorComponent={() => <View style={{ width: '5%' }}></View>}
                    horizontal={true}
                    contentContainerStyle={{ paddingRight: '20%' }}
                    showsHorizontalScrollIndicator={false}
                />
            </MostPopular>

            <Products>
                <ProductsTitle>Nossos Produtos</ProductsTitle>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={item => <HomeListProducts item={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                />
            </Products>
        </Container>
    );
}
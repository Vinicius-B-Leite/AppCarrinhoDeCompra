import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CartProducts from '../../components/CartProducts/inde';
import { BuyButton, BuyContainer, Container, ItemFeedback, Price, TextButton, Total, TotalContainer } from './styles';

export default function Cart() {
    const [cartProducts, setCartProducts] = useState([
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
            id: '2',
            imagem: require('../../assets/bmw2.png'),
            nome: 'Carro BMW 2',
            preco: 800.99
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
        }])

    return (
        <Container>
            <View style={{padding: '5%'}}>
                <ItemFeedback>3 items</ItemFeedback>
                <FlatList 
                    data={cartProducts}
                    renderItem={(item) => <CartProducts item={item}/>}
                    style={{height: '70%'}}
                />
            </View>
            <BuyContainer>
                <TotalContainer>
                    <Total>Total</Total>
                    <Price>R$ 150,99</Price>
                </TotalContainer>
                <BuyButton>
                    <TextButton>Comprar</TextButton>
                </BuyButton>
            </BuyContainer>
        </Container>
    );
}
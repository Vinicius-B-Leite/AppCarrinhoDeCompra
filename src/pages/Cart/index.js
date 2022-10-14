import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CartProducts from '../../components/CartProducts/inde';
import { BuyButton, BuyContainer, Container, ItemFeedback, Price, TextButton, Total, TotalContainer } from './styles';
import { get, onValue, ref } from 'firebase/database'
import { db } from '../../service/firebase'

export default function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        function setCartProductsState(itemKey, quantity) {
            get(ref(db, 'produtos/' + itemKey)).then(snaps => {
                
                let data = {
                    id: itemKey,
                    imagem: snaps.val().imagem,
                    nome: snaps.val().nome,
                    preco: snaps.val().preco,
                    quantidade: quantity
                }
                setCartProducts(oldProducts => [...oldProducts, data])
                setTotal(oldTotal => oldTotal += (data.preco * data.quantidade))
            })
        }
        onValue(ref(db, 'carrinho/uid01'), (snapshot) => {
            setCartProducts([])
            snapshot.forEach((item) => {
                let itemKey = item.key
                let quantity = item.val().quantidade
                setCartProductsState(itemKey, quantity)
            })
        })
    }, [])

    return (
        <Container>
            <View style={{ padding: '5%' }}>
                <ItemFeedback>{cartProducts && cartProducts.length} items</ItemFeedback>
                <FlatList
                    data={cartProducts}
                    renderItem={({ item }) => <CartProducts item={item} />}
                    style={{ height: '70%' }}
                />
            </View>
            <BuyContainer>
                <TotalContainer>
                    <Total>Total</Total>
                    <Price>R$ {total}</Price>
                </TotalContainer>
                <BuyButton>
                    <TextButton>Comprar</TextButton>
                </BuyButton>
            </BuyContainer>
        </Container>
    );
}
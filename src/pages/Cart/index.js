import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CartProducts from '../../components/CartProducts/inde';
import { BuyButton, BuyContainer, Container, ItemFeedback, Price, TextButton, Total, TotalContainer } from './styles';
import { get, onValue, ref, remove, update } from 'firebase/database'
import { db } from '../../service/firebase'

export default function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)

    function addOneMore(item) {
        update(ref(db, 'carrinho/uid01/' + item.id), { quantidade: item.quantidade + 1 }).then(() => {

            let index = cartProducts.indexOf(item)
            let newList = cartProducts
            newList[index].quantidade = item.quantidade + 1
            setTotal(oldTotal => oldTotal += item.preco)
            setCartProducts([...newList])
        })
    }

    function removeOne(item) {
        let index = cartProducts.indexOf(item)
        let newList = cartProducts

        if (item.quantidade === 1) {
            remove(ref(db, 'carrinho/uid01/' + item.id)).then(() => {
                newList = newList.filter(i => i.id !== item.id)
                setCartProducts([...newList])
                setTotal(oldTotal => oldTotal -= item.preco)
            })
            return
        }

        update(ref(db, 'carrinho/uid01/' + item.id), { quantidade: item.quantidade - 1 }).then(() => {

            newList[index].quantidade = item.quantidade - 1
            setTotal(oldTotal => oldTotal -= item.preco)
            setCartProducts([...newList])
        })
    }

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
        }, { onlyOnce: true })
    }, [])


    return (
        <Container>
            <View style={{ padding: '5%' }}>
                <ItemFeedback>{cartProducts && cartProducts.length} items</ItemFeedback>
                <FlatList
                    data={cartProducts}
                    key={item => item.id}
                    extraData={cartProducts}
                    renderItem={({ item }) => <CartProducts item={item} addOneMore={addOneMore} removeOne={removeOne} />}
                    style={{ height: '70%' }}
                />
            </View>
            <BuyContainer>
                <TotalContainer>
                    <Total>Total</Total>
                    <Price>R$ {total.toFixed(2)}</Price>
                </TotalContainer>
                <BuyButton>
                    <TextButton>Comprar</TextButton>
                </BuyButton>
            </BuyContainer>
        </Container>
    );
}
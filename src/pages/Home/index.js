import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Header, Name, MostPopular, MostPopularTitle, Products, ProductsTitle, Icons } from './styles';
import PopularProducts from '../../components/PopularProducts';
import HomeListProducts from '../../components/HomeListProducts';
import { useNavigation } from '@react-navigation/native';
import { child, get, limitToFirst, query, ref } from 'firebase/database';
import { db } from '../../service/firebase';
import { AuthContext } from '../../contexts/auth';
import AlertModal from '../../components/AlertModal'


export default function Home() {
    const navigation = useNavigation()
    const dbRef = ref(db)
    const [modalVisible, setModalVisible] = useState(false)
    const { isLogged, user } = useContext(AuthContext)
    const [produtosPopulares, setPordutosPopulares] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        function getMostPopularProducts() {
            get(query(ref(db, 'produtos'), limitToFirst(3))).then(response => {
                response.forEach(i => {
                    let data = {
                        nome: i.val().nome,
                        imagem: i.val().imagem,
                        preco: i.val().preco,
                        id: i.key
                    }
                    setPordutosPopulares(oldProducts => [...oldProducts, data])
                })
            }).catch(() => alert("Ops ocorreu um erro"))
        }
        function getAllProducts() {
            get(child(dbRef, 'produtos')).then(snapshot => {
                snapshot.forEach(i => {
                    let data = {
                        nome: i.val().nome,
                        imagem: i.val().imagem,
                        preco: i.val().preco,
                        id: i.key,
                    }
                    setProducts(oldProducts => [...oldProducts, data])
                })
            }).catch(() => alert('Ops ocorreu um erro'))
        }
        getAllProducts()
        getMostPopularProducts()
    }, [])
    return (
        <Container>
            <Header>
                <Name>Olá, {user.name || 'Fulano'}!</Name>
                <Icons>
                    <TouchableOpacity onPress={() => isLogged ? navigation.navigate('Cart') : setModalVisible(true)}>
                        <AntDesign name="shoppingcart" size={28} color="#fff" />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                        <AntDesign name="user" size={28} color="#fff" />
                    </TouchableOpacity>
                </Icons>
            </Header>

            <MostPopular>
                <MostPopularTitle>Os mais populares</MostPopularTitle>
                <FlatList
                    data={produtosPopulares}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <PopularProducts data={item} />}
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
                    renderItem={({ item }) => <HomeListProducts item={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                />
            </Products>
            <AlertModal visible={modalVisible} setVisible={setModalVisible}/>
        </Container>
    );
}
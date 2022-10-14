import React, { useEffect, useState } from 'react';
import { Alert, FlatList,TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Header, Name, MostPopular, MostPopularTitle, Products, ProductsTitle, Icons } from './styles';
import PopularProducts from '../../components/PopularProducts';
import HomeListProducts from '../../components/HomeListProducts';
import { useNavigation } from '@react-navigation/native';
import { child, get, limitToFirst, query, ref } from 'firebase/database';
import { db } from '../../service/firebase';


export default function Home() {
    const navigation = useNavigation()
    const dbRef = ref(db, 'produtos')
    
    const [produtosPopulares, setPordutosPopulares] = useState([])
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

    useEffect(()=>{
        function getMostPopularProducts(){
            get(query(dbRef, limitToFirst(3))).then(response =>{
                response.forEach(i => {
                    let data = {
                        nome: i.val().nome,
                        imagem: i.val().imagem,
                        preco: i.val().preco,
                        id: i.key
                    }
                    setPordutosPopulares(oldProducts => [...oldProducts, data])
                })
            }).catch(()=>alert("Ops ocorreu um erro"))
        }
        
        getMostPopularProducts()
    }, [])
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
                    renderItem={({item}) => <PopularProducts data={item} />}
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
                    renderItem={(item) => <HomeListProducts {...item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                />
            </Products>
        </Container>
    );
}
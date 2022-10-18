import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Header,  MostPopular, MostPopularTitle, Products, ProductsTitle, Icons } from './styles';
import { ThemeContext } from 'styled-components/native';


export default function Skeleton() {
    const [randomData, setRandomData] = useState([{ id: '0' }, { id: '1' }, { id: '3' }, { id: '4' }, { id: '5' }])
    

    return (
        <Container>
            <Header>
                <SkeletonName />
                <Icons>
                    <TouchableOpacity>
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
                    data={randomData}
                    renderItem={() => <SkeletonPopoularProducts />}
                    ItemSeparatorComponent={() => <View style={{ width: '5%' }}></View>}
                    horizontal={true}
                    contentContainerStyle={{ paddingRight: '20%' }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                />
            </MostPopular>

            <Products>
                <ProductsTitle>Nossos Produtos</ProductsTitle>
                <FlatList
                    data={randomData}
                    keyExtractor={(item) => item.id}
                    renderItem={() => <SkeletonHomeListProducts />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                />
            </Products>
        </Container>
    );
}

function SkeletonName(){
    const animatedName = useRef(new Animated.Value(-20)).current

    useEffect(()=>{
        Animated.loop(
            Animated.timing(animatedName, {
                toValue: Dimensions.get('screen').width / 1.8,
                duration: 600,
                useNativeDriver: false
            })
        ).start()
    }, [])


    return (
        <View style={{
            width: Dimensions.get('screen').width / 2, 
            height: '10%', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            overflow: 'hidden'}
            }
        >
            <Animated.View style={{
                width: '30%', 
                height: '100%', 
                transform: [{translateX: animatedName}], 
                backgroundColor: 'rgba(0, 0, 0, 0.1)'}}></Animated.View>

        </View>
    )
}

function SkeletonPopoularProducts() {
    const theme = useContext(ThemeContext)
    const width = 0.70 * Dimensions.get('screen').width
    const height = 0.22 * Dimensions.get('screen').height

    const SkeletonPopularProductsAnimated = useRef(new Animated.Value(-20)).current

    useEffect(()=>{
        Animated.loop(
            Animated.timing(SkeletonPopularProductsAnimated, {
                toValue: width,
                duration: 600,
                useNativeDriver: false
            })
        ).start()
    }, [])

    return (
        <View style={{
            backgroundColor: theme.mostPopularProductBackgroudColor,
            marginTop: '5%',
            borderRadius: 10,
            width,
            height,
            overflow: 'hidden'
            }}
        >
            <Animated.View style={{
                height: '100%',
                width: width / 7,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transform: [{translateX: SkeletonPopularProductsAnimated}]
            }}></Animated.View>
        </View>

    )
}

function SkeletonHomeListProducts() {
    const height = Dimensions.get('screen').height / 4
    const width = Dimensions.get('screen').width / 2.5
    const theme = useContext(ThemeContext)

    const AnimatedSkeletonHomeListProducts = useRef(new Animated.Value(-20)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(AnimatedSkeletonHomeListProducts, {
                toValue: width, 
                duration: 600,
                useNativeDriver: false
            })
        ).start()
    }, [])
    return (
        <View style={{
            width,
            height,
            backgroundColor: theme.normalProductsBackground,
            marginTop: '5%',
            overflow: 'hidden'
        }}
        >
            <Animated.View style={{
                height: '100%',
                width: width / 5,
                transform: [{translateX: AnimatedSkeletonHomeListProducts}],
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}>

            </Animated.View>
        </View>
    )
}
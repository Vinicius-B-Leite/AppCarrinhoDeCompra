import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Details from '../pages/Details';
import Cart from '../pages/Cart';
import LogIn from '../pages/LogIn';


const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Details' component={Details} options={DetailsOptions} />
                <Stack.Screen name='Cart' component={Cart} options={CartOptions} />
                <Stack.Screen name='LogIn' component={LogIn}  options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const DetailsOptions = {
    title: 'Detalhes do produto',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#202529'
    },
    headerTintColor: '#fff'
}

const CartOptions = {
    title: 'Carrinho',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#202529'
    },
    headerTintColor: '#fff'
}
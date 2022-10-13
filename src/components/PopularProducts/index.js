import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { Container } from './styles';

export default function PopularProducts(props) {
    const navigation = useNavigation()
    return (
        <Container onPress={()=> navigation.navigate('Details', {item: props.item})}>
            <Image
                source={props.item.item.imagem}
                style={{ width: '80%', height: '70%', resizeMode: 'contain' }}
            />
        </Container>
    );
}
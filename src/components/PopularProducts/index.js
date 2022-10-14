import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { Container } from './styles';

export default function PopularProducts({ data }) {
    const navigation = useNavigation()
    return (
        <Container onPress={() => navigation.navigate('Details', { item: data })}>
            <Image
                source={{ uri: data.imagem }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            />
        </Container>
    );
}
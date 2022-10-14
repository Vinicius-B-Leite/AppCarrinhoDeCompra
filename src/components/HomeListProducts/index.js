import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { Container, FotoCarro, Nome, Preco } from './styles';

export default function HomeListProducts({ item }) {
    const navigation = useNavigation()
    return (
        <Container onPress={() => navigation.navigate('Details', {item: item})}>
            <FotoCarro
                source={{uri: item.imagem}}
            />
            <Nome>{item.nome}</Nome>
            <Preco> R$ {item.preco}</Preco>
        </Container>
    );
}
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { Container, FotoCarro, Nome, Preco } from './styles';

export default function HomeListProducts({ item }) {
    const navigation = useNavigation()
    return (
        <Container onPress={() => navigation.navigate('Details')}>
            <FotoCarro 
                source={item.item.imagem}
            />
            <Nome>{item.item.nome}</Nome>
            <Preco> R$ {item.item.preco}</Preco>
        </Container>
    );
}
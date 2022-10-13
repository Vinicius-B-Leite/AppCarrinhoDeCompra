import React from 'react';
import { View, Image } from 'react-native';
import { Container } from './styles';

export default function PopularProducts(props) {
    console.log(props.item.item.imagem)
    
    return (
        <Container>
            <Image
                source={props.item.item.imagem}
                style={{ width: '80%', height: '70%', resizeMode: 'contain' }}
            />
        </Container>
    );
}
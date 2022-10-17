import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Button, Container, ContainerAdd, InfoContainer, Name, Price, ProductImage, ItemQuantity } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../service/firebase'
import { update, ref } from 'firebase/database'

export default function CartProducts({ item, addOneMore, removeOne }) {

  
  return (
    <Container>
      <ProductImage
        source={{ uri: item.imagem }}
      />
      <InfoContainer>
        <Name>{item.nome}</Name>
        <Price>R$ {item.preco}</Price>
      </InfoContainer>


      <ContainerAdd>
        <Button onPress={() => removeOne(item)}><Ionicons name="md-remove" size={15} color="black" /></Button>
        <ItemQuantity>{item.quantidade}</ItemQuantity>
        <Button onPress={() => addOneMore(item)}><Ionicons name="add-outline" size={15} color="#000" /></Button>
      </ContainerAdd>
    </Container>
  );
}
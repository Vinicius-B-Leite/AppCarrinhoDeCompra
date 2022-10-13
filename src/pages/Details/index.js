import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ButtonAddCart, Container, ContainerDescription, ContainerNamePrice, Description, Name, Price, ProductImage, TextButtonAddCart, TitleDescription } from './styles';

export default function Details({ route }) {
  const params = route.params.item?.item
  return (
    <Container>
      <ProductImage
        source={params && params.imagem}
      />
      <ContainerNamePrice>
        <Name>{params && params.nome}</Name>
        <Price>R$ {params && params.preco}</Price>
      </ContainerNamePrice>

      <ContainerDescription>
        <TitleDescription>Descricao</TitleDescription>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus omnis laboriosam, dicta maiores quae earum sed. Molestiae cumque deleniti aliquam nemo ab magni, maxime repellat perspiciatis quae error recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam tempora magni voluptatibus, dicta repudiandae quasi laudantium repellendus neque cumque rem architecto! Sint modi ipsum consequuntur nobis est sed commodi?</Description>
      </ContainerDescription>

      <ButtonAddCart>
        <TextButtonAddCart>Add no carrinho</TextButtonAddCart>
      </ButtonAddCart>
    </Container>
  );
}
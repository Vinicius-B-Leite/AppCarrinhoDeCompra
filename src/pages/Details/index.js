import React, { useContext, useState } from 'react';
import { child, get, ref, set, update } from 'firebase/database'
import { ButtonAddCart, Container, ContainerDescription, ContainerNamePrice, Description, Name, Price, ProductImage, TextButtonAddCart, TitleDescription } from './styles';
import { db } from '../../service/firebase'
import { Alert, ToastAndroid } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';
import AlertModal from '../../components/AlertModal';


export default function Details({ route }) {
  const params = route.params?.item
  const { isLogged } = useContext(AuthContext)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()


  async function getProductQuantity(){
    let productQuantityCart = await get(child(ref(db), `carrinho/uid01/${params.id}`))
    return await productQuantityCart
  }

  async function addCart() {
    

      getProductQuantity().then(snapshot => {
        if (snapshot.exists()){
          let newQuant = snapshot.val().quantidade + 1
          update(ref(db, 'carrinho/uid01/' + params.id), {quantidade: newQuant})
        }
        else{
          set(ref(db, 'carrinho/uid01/' + params.id), {quantidade: 1})
        }
        ToastAndroid.show('Adicionado com sucesso', ToastAndroid.SHORT)
      })
    
  }
  return (
    <Container>
      <ProductImage
        source={{ uri: params.imagem }}
      />
      <ContainerNamePrice>
        <Name>{params && params.nome}</Name>
        <Price>R$ {params && params.preco}</Price>
      </ContainerNamePrice>

      <ContainerDescription>
        <TitleDescription>Descricao</TitleDescription>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus omnis laboriosam, dicta maiores quae earum sed. Molestiae cumque deleniti aliquam nemo ab magni, maxime repellat perspiciatis quae error recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam tempora magni voluptatibus, dicta repudiandae quasi laudantium repellendus neque cumque rem architecto! Sint modi ipsum consequuntur nobis est sed commodi?</Description>
      </ContainerDescription>

      <ButtonAddCart onPress={() => isLogged ? addCart() : setModalVisible(true)}>
        <TextButtonAddCart>Add no carrinho</TextButtonAddCart>
      </ButtonAddCart>

      <AlertModal visible={modalVisible} setVisible={setModalVisible}/>
    </Container>
  );
}
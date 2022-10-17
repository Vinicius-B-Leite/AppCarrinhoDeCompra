import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Container, Input, LoginButton, Logo, Main, RegisterButton, TextLoginButton, TextRegisterButton } from '../LogIn/styles';

export default function SingUp() {
  const navigation = useNavigation()
  
  return (
    <Container>
        <Logo>BL Carros</Logo>
        <Main>
          <Input placeholder="Digite seu nome"/>
          <Input placeholder="Digite seu email"/>
          <Input placeholder="Digite sua senha"/>
          <LoginButton>
            <TextLoginButton>Entrar</TextLoginButton>
          </LoginButton>
          <RegisterButton onPress={() => navigation.navigate('SingUp')}>
            <TextRegisterButton>Cadastrar</TextRegisterButton>
          </RegisterButton>
        </Main>
    </Container>
  );
}
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, Input, LoginButton, Logo, Main, RegisterButton, TextLoginButton, TextRegisterButton } from './styles';

export default function LogIn() {
  return (
    <Container>
        <Logo>BL Carros</Logo>
        <Main>
          <Input/>
          <Input/>
          <LoginButton>
            <TextLoginButton>Entrar</TextLoginButton>
          </LoginButton>
          <RegisterButton>
            <TextRegisterButton>Cadastrar</TextRegisterButton>
          </RegisterButton>
        </Main>
    </Container>
  );
}
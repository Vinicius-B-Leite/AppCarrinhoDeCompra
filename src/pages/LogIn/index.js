import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Container, Input, LoginButton, Logo, Main, RegisterButton, TextLoginButton, TextRegisterButton } from './styles';

export default function LogIn() {
  const navigation = useNavigation()
  
  return (
    <Container>
        <Logo>BL Carros</Logo>
        <Main>
          <Input/>
          <Input/>
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
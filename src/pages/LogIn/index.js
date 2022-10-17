import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Container, Input, LoginButton, Logo, Main, RegisterButton, TextLoginButton, TextRegisterButton } from './styles';

export default function LogIn() {
  const navigation = useNavigation()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { logIn, isLoading } = useContext(AuthContext)

  function login(){
    logIn(email, password, () => navigation.goBack())
  }

  return (
    <Container>
      <Logo>BL Carros</Logo>
      <Main>
        <Input value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
        <Input value={password} onChangeText={(text) => setPassword(text)} placeholder="Senha" />

        <LoginButton onPress={() => login()}>
          <TextLoginButton>{isLoading ? <ActivityIndicator color='#fff' size={20}/> : 'Entrar'}</TextLoginButton>
        </LoginButton>

        <RegisterButton onPress={() => navigation.navigate('SingUp')}>
          <TextRegisterButton>Cadastrar</TextRegisterButton>
        </RegisterButton>
      </Main>
    </Container>
  );
}
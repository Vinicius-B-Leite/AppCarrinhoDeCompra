import { useNavigation } from '@react-navigation/native';
import { set } from 'firebase/database';
import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/auth';
import { Container, Input, LoginButton, Logo, Main, RegisterButton, TextLoginButton, TextRegisterButton } from '../LogIn/styles';

export default function SingUp() {
    const navigation = useNavigation()
    const { singUp, isLoading } = useContext(AuthContext)
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Container>
            <Logo>BL Carros</Logo>
            <Main>
                <Input value={userName} onChangeText={(text) => setUserName(text)} placeholder="Digite seu nome" />
                <Input value={email} onChangeText={(text) => setEmail(text)} placeholder="Digite seu email" />
                <Input value={password} onChangeText={(text) => setPassword(text)} placeholder="Digite sua senha" />

                <LoginButton onPress={() => {
                    singUp(email, password, userName)
                    navigation.goBack()
                }}>
                    <TextLoginButton>{isLoading ? <ActivityIndicator color="#fff" size={20}/> : 'Cadastrar'}</TextLoginButton>
                </LoginButton>

            </Main>
        </Container>
    );
}
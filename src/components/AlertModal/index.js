import React from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import * as S from './styles'



export default function AlertModal({ visible, setVisible }) {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >

            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <S.Main>
                    <S.Container>
                        <S.Title>Atenção</S.Title>
                        <S.Description>Para adicionar itens no carrinho é necessário realizar o login</S.Description>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <S.CancelButton onPress={() => setVisible(false)}>
                                <S.TextCancelButton>Cancelar</S.TextCancelButton>
                            </S.CancelButton>
                            <S.LoginButton>
                                <S.TextLoginButton>Login</S.TextLoginButton>
                            </S.LoginButton>
                        </View>

                    </S.Container>
                </S.Main>
            </TouchableWithoutFeedback>

        </Modal>
    );
}
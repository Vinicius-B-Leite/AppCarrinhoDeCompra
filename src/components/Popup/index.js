import React, { useContext } from 'react';
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { AuthContext } from '../../contexts/auth';

export default function Popup({ popupVisible, setPopupVisible }) {
    const theme = useContext(ThemeContext)
    const { logout } = useContext(AuthContext)
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={popupVisible}
            onRequestClose={() => setPopupVisible(false)}>

            <TouchableWithoutFeedback onPress={() => setPopupVisible(false)}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        position: 'absolute',
                        width: '40%',
                        height: '7%',
                        top: '10%',
                        right: '10%',
                        backgroundColor: theme.normalProductsBackground,
                        padding: '5%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                        <TouchableOpacity onPress={() =>{
                             logout()
                             setPopupVisible(false)
                        }}>
                            <Text style={{ color: '#ff1c1c' }}>Sair da conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        </Modal>
    );
}
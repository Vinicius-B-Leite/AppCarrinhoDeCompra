import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../service/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';



export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [isLoadingSingUp, setIsLoadingSingUp] = useState(false)


    function singUp(email, senha, nome) {
        setIsLoadingSingUp(true)
        createUserWithEmailAndPassword(auth, email, senha).then(async(userCredential) => {
            let data = {
                email: userCredential.user.email,
                password: senha,
                uid: userCredential.user.uid,
                name: nome
            }
            await AsyncStorage.setItem('_user', JSON.stringify(data)).then(() => {
                setIsLogged(true)
                setIsLoadingSingUp(false)
            })
        }).catch((error)=>{
            alert('Ops ocorreu um erro ' + error)
            setIsLoadingSingUp(false)
        })
    }

    return (
        <AuthContext.Provider value={{ isLogged, singUp }}>
            {children}
        </AuthContext.Provider>
    )
}
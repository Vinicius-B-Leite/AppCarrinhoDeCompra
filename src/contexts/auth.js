import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../service/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { child, get, ref, set } from 'firebase/database';



export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({})

    useEffect(()=>{

        async function getAsyncStorage(){
            AsyncStorage.getItem('_user').then(data => {
                
                if (data) {
                    setUser(JSON.parse(data))
                    setIsLogged(true)
                }
                
            })
        }

        getAsyncStorage()

    }, [])

    function singUp(email, senha, nome, goBack) {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, senha).then(async (userCredential) => {
            let data = {
                email: userCredential.user.email,
                password: senha,
                uid: userCredential.user.uid,
                name: nome
            }
            set(ref(db, 'users/' + data.uid), data)
            setIsLoading(false)
            goBack()
        }).catch((error) => {
            alert('Ops ocorreu um erro ' + error)
            setIsLoading(false)
        })
    }

    function logIn(email, senha, goBack) {

        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, senha).then(async (userCredential) => {

            let getName  = await get(child(ref(db), 'users/' + userCredential.user.uid))
            let data = {
                email: userCredential.user.email,
                password: senha,
                uid: userCredential.user.uid,
                name: getName.val().name
            }
            await AsyncStorage.setItem('_user', JSON.stringify(data)).then(() => {
                setIsLogged(true)
                setUser(data)
                setIsLoading(false)
                goBack()
            })

        }).catch((error) => {
            alert('Ops ocorreu um erro ' + error)
            setIsLoading(false)
        })
    }

    function logout(){
        signOut(auth).then( ()=>{
            AsyncStorage.clear().then(()=>{
                setUser({})
                setIsLogged(false)
            })
        }).catch(() => alert("Ops deu erro em deslogar"))
    }

    return (
        <AuthContext.Provider value={{ isLogged, singUp, isLoading, logIn, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
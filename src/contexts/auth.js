import React, {createContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)
    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();
    },[])
    async function signIn(email, password){
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid:uid,
                    name: snapshot.val().name,
                    email:value.user.email
                }

                setUser(data)
                StorageUser(data)
                setLoadingAuth(false)
            })

        })
        .catch((error)=>{
            alert('Não foi possível fazer o login, ',error );
            setLoadingAuth(false)
        })
    }

    async function signUp(email, password, name){
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                balance:0,
                name:name
            })
            .then(()=>{
                let data = {
                    uid:uid,
                    name: name,
                    email:value.user.email
                }
                setUser(data);
                StorageUser(data)
                setLoadingAuth(true)
            })
            .catch((error)=>{
                alert('Não foi possível fazer o cadastro, ',error );
                setLoadingAuth(false)
            })

        })
    }

    async function StorageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data) )
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null)
        })
    }
    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, loadingAuth, signUp, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
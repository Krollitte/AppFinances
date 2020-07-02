import React, { useState, useContext } from 'react';
import { View, Platform, ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';

import logo from '../../assets/Logo.png'
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText  
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext)

  return (
   <Background>
     <Container
     behavior = {Platform.OS === 'ios' ? 'padding' : ''}
     enable>
       <Logo source={logo}/>
       <AreaInput>
          <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCaptalize="none"
          value={email}
          onChangeText={setEmail}
          />

          <Input
          placeholder="senha"
          autoCorrect={false}
          autoCaptalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />
       </AreaInput>
       <SubmitButton onPress={()=>{signIn(email, password)}}>
         {
           loadingAuth ?  (
             <ActivityIndicator size={20} color="#FFF"/>
           ):
           (
            <SubmitText>
             Acessar
            </SubmitText>
           )
         }
         
       </SubmitButton>

       <Link>
        <LinkText onPress={()=>{navigation.navigate('signUp')}}>
        Ainda não tem conta? Faça a sua aqui!
        </LinkText>
       </Link>

     </Container>
   </Background>
  );
}
import React, { useState, useContext } from 'react';
import { View, Platform, ActivityIndicator } from 'react-native';

import {AuthContext} from '../../contexts/auth'

import logo from '../../assets/Logo.png'
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

export default function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {signUp, loadingAuth} = useContext(AuthContext);



  return (
   <Background>
     <Container
     behavior = {Platform.OS === 'ios' ? 'padding' : ''}
     enable>
       
       <AreaInput>
       <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCaptalize="none"
          value={name}
          onChangeText={setName}
          />
          <Input
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCaptalize="none"
          value={email}
          onChangeText={setEmail}
          />

          <Input
          placeholder="senha"
          autoCorrect={false}
          autoCaptalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          />
       </AreaInput>
       <SubmitButton onPress={()=>{signUp(email, password, name)}}>
       {
           loadingAuth ?(
             <ActivityIndicator size={20} color="#FFF"/>
           ):
           (
            <SubmitText>
             Cadastrar
            </SubmitText>
           )
         }
       </SubmitButton>

      

     </Container>
   </Background>
  );
}
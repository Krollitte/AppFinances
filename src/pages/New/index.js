import React, {useState, useContext} from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import firebase from '../../services/firebaseConnection';
import {format}from 'date-fns';
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/header';
import Picker from '../../components/Picker';

import {AuthContext} from '../../contexts/auth'


import {
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText
} from './styles';

export default function New() {
const [value, setValue] = useState('');
const [description, setDescription] = useState('');
const [type, setType] = useState(null);
const navigation = useNavigation();
const {user: userLoged} = useContext(AuthContext); 

function handleSubmit(){
  Keyboard.dismiss();
  if(isNaN(parseFloat(value)) || type === null || description ===''){
    alert('Preencha todos os campos');
    return;
  }
  Alert.alert(
    'Confirmando dados',
    `Tipo: ${type} - Valor: ${parseFloat(value)} - Descrição: ${description}`,
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },

      {
        text: 'Continuar',
        onPress:()=>{handleAdd()}
      }
    ]
  )
  
}

async function handleAdd(){
  let uid = userLoged.uid;

  let key = await firebase.database().ref('historic').child(uid).push().key;
  await firebase.database().ref('historic').child(uid).child(key).set({
    type:type,
    balance:parseFloat(value),
    date:format(new Date(), 'dd/MM/yy'),
    description:description
  })

  //Atualiza o Saldo
  let user = firebase.database().ref('users').child(uid);
  await user.once('value').then((snapshot)=>{
    var balance = parseFloat(snapshot.val().balance)
    console.log(balance);
    type === 'despesa' ? balance = balance - parseFloat(value) : balance = balance + parseFloat(value);

    user.child('balance').set(balance);
    
  });
  setDescription('');
  setValue('');
  Keyboard.dismiss();
  navigation.navigate('Home');
  

}
 return (
   <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <Background>
        <Header/>
        <Container>
          <Input
          placeholder="Descrição"
          returnKeyType="next"
          onSubmitEditing={()=>Keyboard.dismiss()}
          value={description}
          onChangeText={(text) => setDescription(text)}
          />

          <Input
          placeholder="Valor a cadastrar"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={()=>Keyboard.dismiss()}
          value={value}
          onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType}/>

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>
              Cadastrar
            </SubmitText>
          </SubmitButton>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}
import React, {useContext, useState, useEffect} from 'react';
import firebase from '../../services/firebaseConnection'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {format} from 'date-fns';

import Header from '../../components/header';
import HistoricList from '../../components/HistoricList';

import {
  Background,
  Container,
  Name,
  Value,
  Title,
  List
} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const [ historic, setHistoric] = useState([]);
  const [balance, setBalance] = useState(0);
  const [newDate, setNewDate] = useState(new Date())
  const uid = user.uid;
  
  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setBalance(snapshot.val().balance)
      });

      await firebase.database().ref('historic')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yy'))
      .limitToLast(10).on('value',(snapshot)=>{
        setHistoric([]);
        
        snapshot.forEach((childItem)=>{
          let list = {
            key: childItem.key,
            tipo:childItem.val().type,
            valor: childItem.val().balance,
            descrição:childItem.val().description
          };

          setHistoric(oldArray=>[...oldArray, list].reverse());
        })
      })
    }
    loadList();
  }, [])
 return (
   <Background>
     <Header/>
     <Container>
       <Name>
         {user.name}
       </Name>
       <Value>
        {`R$ ${balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` }
       </Value>
     </Container>
     <Title>Últimas movimentações</Title>

     <List
      showsVerticalScrollIndicator={false}
      data={historic}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricList data={item} /> )}
      />
   </Background>
  );
}
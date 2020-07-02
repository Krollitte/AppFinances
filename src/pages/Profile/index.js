import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header'

import { 
    Container,
    UserName,
    NewLink,
    NewText,
    LogOut,
    LogOutText
 } from './styles'
 import {AuthContext} from '../../contexts/auth';

export default function Profile() {
    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);
 return (
   <Container>
       <Header/>   
       <UserName>{user.name}</UserName>
       <NewLink onPress={()=>{navigation.navigate('Registrar Movimentação')}}>
           <NewText>Registrar Movimentação</NewText>
       </NewLink>
       <LogOut onPress={()=>{signOut()}}>
           <LogOutText>
               Sair
           </LogOutText>
       </LogOut>
   </Container>
  );
}
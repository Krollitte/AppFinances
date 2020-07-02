import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import firebase from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth'
console.disableYellowBox = true

import Routes from './src/routes/index'
export default function FinançasApp() {
 return (
   <NavigationContainer>
     <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes/>
     </AuthProvider>
   </NavigationContainer>
  );
}
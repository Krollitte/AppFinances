import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrower = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrower.Navigator
    drawerStyle={{
        backgroundColor:'#171717'
        }}
    drawerContentOptions={{
        labelStyle:{
            fontWeigth:"bold",
        },
        activeTintColor:"#FFF",
        activeBackgroundColor:'#00b94a',
        inactiveBackgroundColor:"#000",
        inactiveTintColor:'#DDD',
        itemStyle:{
            marginVertical:5,
        }
    }}>
        <AppDrower.Screen name='Home' component={Home}/>
        <AppDrower.Screen name='Registrar Movimentação' component={New}/>
        <AppDrower.Screen name='Perfil' component={Profile}/>
        
    </AppDrower.Navigator>
    )}

export default AppRoutes;
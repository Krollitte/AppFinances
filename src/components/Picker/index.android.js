import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
    PickerView
} from './styles';

export default function Picker({onChange}) {
 return (
   <PickerView>
       <RNPickerSelect
       style={{
           inputIOS:{
               height:50,
               padding:5,
               backgroundColor: 'rgba(255, 255, 255, 0.9)',
               fontSize:16
           }
       }}
       placeholder={{
           label:'Selecione o tipo de movimentação',
           color:'#000',
           value:null,
       }}
       onValueChange={ (type)=>{onChange(type)} }
       items={[
           {key: 1, label:'Receita', value:'receita', color:'#000'},
           {key: 2, label:'Despesa', value:'despesa', color:'#000'},
       ]}/>
   </PickerView>
  );
}
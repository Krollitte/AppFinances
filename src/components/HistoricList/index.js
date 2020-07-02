import React from 'react';
import Icon from 'react-native-vector-icons/Feather';


import {
    Container,
    Type,
    IconView,
    TypeText,
    ValueText,
    Description,
    DescriptionText,
    ValueTypeView
} from './styles';


export default function HistoricList({data}) {
 return (

<Container>
    <ValueTypeView>
       <Type>
           <IconView type ={data.tipo}>
               <Icon 
               name={data.tipo === 'despesa'? 'arrow-down': 'arrow-up'} color="#FFF" size={20}/>
               <TypeText>
                   {data.tipo}
                </TypeText>
           </IconView>
       </Type>
       
       <ValueText> 
           R$ {data.valor}
        </ValueText>
    </ValueTypeView>   

    <Description>
       <DescriptionText>
         {data.descrição}
        </DescriptionText>
    </Description>
   </Container>
   
  );
}
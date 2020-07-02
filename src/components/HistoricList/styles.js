import styled from 'styled-components/native';

export const Container = styled.View`
margin-bottom:5px;
padding:10px;
flex-direction:row;
align-items:center;
box-shadow:2px 2px rgba(0,0,0, 0.40);
background-color:rgba(0,0,0, 0.02);
`;

export const Type = styled.View`
flex-direction:row;
`;
export const IconView = styled.View`
flex-direction:row;
background-color:${props => props.type ==='despesa' ? '#c62c36' : '#049301'};
padding-bottom:3px;
padding-top:3px;
padding-left:8px;
padding-right:8px;
border-radius:7px;
`;

export const TypeText = styled.Text`
color:#fff;
font-size:16px;
font-style:italic
`;

export const ValueText = styled.Text`
color:#222;
font-size:22px;
font-weight:bold`;

export const Description = styled.View`
padding:10px;
align-items:center;
margin-left:20%;
`;

export const DescriptionText = styled.Text`
color:black;
font-size:18px;
font-weight:bold;
padding-bottom:10px;
`;

export const ValueTypeView = styled.View`
margin-bottom:5px;
align-items:center
padding-top:10px;
padding-bottom:10px;



`;
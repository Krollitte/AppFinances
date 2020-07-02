import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background-color:#131313;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;`;

export const Logo = styled.Image`
margin-bottom:10px`;

export const AreaInput = styled.View`
height:130px;
width:90%;
justify-content:center;
flex-direction:column;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.40)'
})`
background: rgba(0, 0, 0, 0.50)
width:100%;
font-size:17px;
color:#FFF;
margin-bottom:15px;
padding:10px;
border-radius:8px;
`;

export const SubmitButton = styled.TouchableOpacity`
align-items:center;
justify-content:center;
background:#00b94a;
width:90%;
height:45px;
border-radius:8px;
margin-top:10px;
`;

export const SubmitText = styled.Text`
font-size:20px;
color:#131313;
`;
export const Link = styled.TouchableOpacity`
margin-top:5px;
margin-bottom:9px;`;

export const LinkText = styled.Text`
color:#FFF`;


import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
    padding: 5%;
    align-items: center;
    justify-content: center;
`;
export const Logo = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 40px;
    line-height: 60px;
`
export const Main = styled.View`
    width: 90%;
    height: 40%;
`
export const Input = styled.TextInput`
    border-width: 1px;
    width: 100%;
    height: 15%;
    border-color: ${props => props.theme.textColor};
    margin-top: 5%;
    border-radius: 5px;
`
export const LoginButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.contrast};
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    padding: 3%;
    border-radius: 5px;
`
export const TextLoginButton = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 17px;
    font-weight: bold;
`
export const RegisterButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-top: 5%;
`
export const TextRegisterButton = styled.Text`
    color: ${props => props.theme.textColor};
    text-decoration: dotted;
`
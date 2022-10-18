import styled from 'styled-components/native';

export const Main = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.9);
`;

export const Container = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.theme.backgroundColor};
    padding: 5%;
    border-radius: 10px;
`
export const Title = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.textColor};
    line-height: 40px;
`
export const Description = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.textColor};
    line-height: 20px;
    padding-bottom: 10%;
`
export const CancelButton = styled.TouchableOpacity`
    width: 45%; 
    justify-content: center;
    align-items: center;
    `
export const TextCancelButton = styled.Text`
    color: ${props => props.theme.textColor};
`
export const LoginButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.contrast};
    width: 45%;
    justify-content: center;
    align-items: center;
    padding: 3%;
    border-radius: 8px;
`
export const TextLoginButton = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.normalProductsBackground};
    font-weight: bold;
`
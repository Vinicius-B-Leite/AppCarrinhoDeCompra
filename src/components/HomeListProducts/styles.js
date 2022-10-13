import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 45%;
    height: ${Dimensions.get('screen').height / 4}px;
    background-color: #32383D;
    margin-top: 5%;
    padding: 5%;
    align-items: center;
`;

export const FotoCarro = styled.Image`
    width: 100%;
    height: 50%;
    resizeMode: contain;
`

export const Nome = styled.Text`
    color: #1BC6B4;
    font-weight: bold;
    font-size: 15px;
    line-height: 35px;
`

export const Preco = styled.Text`
    font-size: 15px;
    color: #4C555C;
`
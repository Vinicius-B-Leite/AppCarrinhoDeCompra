import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${Dimensions.get('screen').height / 6}px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 3%;
    elevation: .5;
`;

export const ProductImage = styled.Image`
    width: 40%;
    height: 100%;
    resizeMode: contain;
`;

export const InfoContainer = styled.View`
    height: 60%;
    justify-content: space-around;
`

export const Name = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.textColor};
`

export const Price = styled.Text`
    color: ${props => props.theme.contrast};
`

export const ContainerAdd = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    align-self: flex-end;
    margin-bottom: 3%;
`

export const Button = styled.TouchableOpacity`
    background-color: ${props=>props.theme.textColor};
    width: 25%;
    height: 28%;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`

export const ItemQuantity = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.textColor};
`
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${props => props.theme.backgroundColor};
    flex: 1;
`;

export const ItemFeedback = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 18px;
`
export const BuyContainer = styled.View`
    background-color: ${props => props.theme.normalProductsBackground};
    padding: 5%;
`

export const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Total = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 18px;
`

export const Price = styled.Text`
    color: ${props => props.theme.contrast};
    font-size: 18px;
`

export const BuyButton = styled.TouchableOpacity`
    width: 100%;
    background-color: ${props => props.theme.contrast};
    margin-top: 10%;
    justify-content: center;
    align-items: center;
    padding: 4%;
`

export const TextButton = styled.Text`
    font-size: 17px;
    color: ${props => props.theme.textColor};
    font-weight: bold;
`
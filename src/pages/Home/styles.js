import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
    padding: 5%;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10%;
`

export const Icons = styled.View`
    flex-direction: row;
    width: 25%;
    justify-content: space-between;
`

export const Name = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 18px;
`

export const MostPopular = styled.View``

export const MostPopularTitle = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 15px;
`

export const Products = styled.View`
    flex: 1;
`

export const ProductsTitle = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 15px;
    paddingVertical: 5%;
    margin-top: 5%;
`
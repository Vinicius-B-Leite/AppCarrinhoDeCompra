import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 40%;
    align-self: center;
    resizeMode: contain;
`
export const ContainerNamePrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5%;
`;
export const Name = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.textColor};

`;
export const Price = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.contrast};
    font-weight: bold;

`;
export const ContainerDescription = styled.View`
    padding: 5%;

`;
export const TitleDescription = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.textColor};

`;
export const Description = styled.Text`
    text-align: justify;
    color: ${props => props.theme.textColor};

`;
export const ButtonAddCart = styled.TouchableOpacity`
    marginHorizontal: 5%;
    background-color: ${props => props.theme.contrast};
    justify-content: center;
    align-items: center;
    padding: 2%;
    border-radius: 10px;
`;
export const TextButtonAddCart = styled.Text`
    color: ${props => props.theme.textColor};
    font-size: 18px;
    font-weight: bold;
`;
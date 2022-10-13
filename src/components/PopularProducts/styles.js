import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const Container = styled.TouchableOpacity`
    width: ${0.70 * Dimensions.get('screen').width}px;
    height: ${0.22 * Dimensions.get('screen').height}px;
    background-color: ${props=>props.theme.mostPopularProductBackgroudColor};
    margin-top: 5%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
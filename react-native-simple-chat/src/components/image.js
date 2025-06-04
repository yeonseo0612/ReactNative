import styled from "styled-components";
import {Input, Button} from '../components';
import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespce } from "../utils/common";
const Container = styled.View`
    align-self : center;
    margin-bottom : 30px;
    
`

const StyledImage = styled.Image`
    background-color : ${({theme}) => theme.ImageBackground};
    width : 100px;
    height : 100px;
    borderRadius : ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const Image = ({url, imageStyle}) => {
    return(
        <Container>
            <StyledImage source={{uri : url}} style={imageStyle}/>
        </Container>
    )
}

export default Image;

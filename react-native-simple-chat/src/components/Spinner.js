import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled, {ThemeContext} from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'; 

const Container = styled.View`

    position : absolute;
    z-index : 2;
    opacity : 0.3;
    width: 100%;
    height : 100%;
    justify-content : center;
    background-color : ${(theme) => theme.spinnerBackground}
`

const Spinner = () => {
    const theme = useContext(ThemeContext);
    return(
        <Container>
            <ActivityIndicator size={'large'} color={theme.spinnerIndicator}></ActivityIndicator>
        </Container>
    )
}

export default Spinner;
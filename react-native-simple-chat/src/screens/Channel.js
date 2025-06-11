
import React from "react";
import styled from "styled-components";
import {Text} from 'react-native'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.background};
`;

const Channel = ({route}) => {
    return(
        <Container>
            <Text style={{fontSize : 24}}>{route.params?.id}</Text>
            <Text style={{fontSize : 24}}>{route.params?.title}</Text>
        </Container>
    )
}

export default Channel;
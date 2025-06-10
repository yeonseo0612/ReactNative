import React from'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Button = styled.Pressable`
 width: 80%;
 padding: 14px;
 background-color: #3498db
 margin: 10px 0;
 border-radius: 8px;
 align-items: center;
`
const CustomButton = ({title, onPress}) => {

    <Button onPress={onPress}>
        <Text>{title}</Text>
    </Button>

}

export default CustomButton;

import styled from 'styled-components';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";


const StyledText = styled.Text`

    font-size : 24px;
    margin : 10px;

`

const Counter = () => {
    const[count, setCount] = useState(0);

    return(

        <View>
            <View>
                <Text style={StyledText}>Counter : {count}</Text>
            </View>
            {/* onPress 이벤트가 실행되기 전에 함수가 실행되어버릴 수 있기 때문에 */}
            {/* onPress={setCount(prev => prev+1)} */}
            <Button title="+" onPress={setCount(prev => prev+1)}></Button>
            <Button title="-" onPress={() => {setCount(count - 1)}}></Button>
        </View>


    )

}

export default Counter;
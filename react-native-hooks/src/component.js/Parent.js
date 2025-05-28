import { useState } from "react";
import {View} from 'react-native';
import Child from './Child';

const Parent = () => {

    const[count, setCount] = useState(0);

    return(
        <View>
            <Text>Count : {count}</Text>
            <Child changeCount = {setCount}></Child>
        </View>

    )

}

export default Parent;
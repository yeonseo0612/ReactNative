import { useReducer } from "react";
import { View, Text, Button } from 'react-native';

const initialState = { count: 0 };

//dispatch함수를 통해 전달된 action에 따라 state의 값ㅇ르 처리할 로직
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + 1 }; // 새 객체를 반환
            //state.count +=1, state.count++; -> x 불변성을 해친다.
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default function Counter2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    //dispatch함수는 인자고 전달된 action갑슬 reducer함수에 전달하고 역할이 끝난다.
    return (
        <View style={{alignItems :'center', justifyContent: 'center', flex:1}}>
            <Text style={{fontSize: 30}}>Count: {state.count}</Text>
            <Button title="+" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="-" onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    );
}
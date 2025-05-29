import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";

//스택 네비게이션 객체를 생성
//Stack객체에 Stack.Navigator, Stack.Screen등의 컴포넌트가 포함되어 있다.
const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        //여러 스크린을 관리하는 컨테이너이다.
        //내부에 <Stack.Screen>컴포넌트를 정의하여 사용할 화면들을 등록한다.
        <Stack.Navigator initialRouteName="Home" screenOptions={{cardStyle:{backgroundColor:'#fff'}, headerStyle: {height : 110, backgroundColor: '#95a5a6', borderBottomWidth: 5, borderBottomColor : '#34495e'}, headerTitleStyle : {color : '#fff', fontSize : 24}}}>
            {/* name에는 화면의 이름을 작성하는데, Screen 컴포넌트의 name은 반드시 서로 다른 값을 가져야 한다. */}
            {/* name : 화면 고유의 이름 나중에 화면을 이동할 때 필요한 이름이다. 
                component : 연결된 실제 컴포넌트, 해당 name이 호출되면 해당 컴포넌트가 렌더링된다.
            */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} options={{headerTitle : 'List Screen'}}/>
            <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
    )
}
export default StackNavigation;
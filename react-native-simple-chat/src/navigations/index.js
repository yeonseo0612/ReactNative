import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";
import MainStack from "./MainStack";
import { UserContext } from "../contexts";

const Navigation = () => {
    //useContext()훅을 통해 ProgressContext가 제공하는 것들을 받아올 수 있다.
    const {inProgress} = useContext(ProgressContext);
    const {user} = useContext(UserContext);
    //?. : 옵셔널 체이닝
    //객체의 속성이나 메서드에 접근할 때 값이 null이거나 undefined여도 에러가 나지 않고
    //undefined를 반환하도록 하는 문법이다.
    console.log('user.email')
    return(
        <NavigationContainer>
            {user?.email && user?.uid ? <MainStack /> : <AuthStack />}
            {inProgress && <Spinner />}
        </NavigationContainer>
    )
}

export default Navigation;
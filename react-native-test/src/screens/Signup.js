import { useState } from "react";
import {View, Text} from 'react-native';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Alert } from "react-native";

const Signup = ({navigation}) => {
    const[name , setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


return(
    <View>
        <Text>회원가입</Text>
        <CustomInput placeholder='Name' value={name} onChangeText={setName}/>
        <CustomInput placeholder='Email' value={email} onChangeText={setEmail}/>
        <CustomInput placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword}/>
        <CustomButton title='회원가입' onPress={() => Alert.alert('회원가입 버튼 클릭')} />
        <CustomButton title='로그인' onPress={() => navigation.navigate('login') }/>
    </View>
)
}
export default Signup;


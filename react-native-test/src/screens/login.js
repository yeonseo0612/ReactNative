import { useState } from "react";
import {View, Text} from 'react-native';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const login = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return(
        <View>
            <Text>로그인</Text>
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
            <CustomButton title="로그인"  onPress={() => Alert.alert('로그인 버튼 클릭')}></CustomButton>
            <CustomButton title="회원가입" onPress={() => navigation.navigate('Signup')}></CustomButton>
        </View>

    )
};
export default login;

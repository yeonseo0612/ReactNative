import { useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export const _Signup = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[pwdenable, setPwdEnable] = useState(false);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSumbit = () => { 
    
          alert('회원가입 완료')
         
    }

    return(
        <SafeAreaView style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <View>
                <View style={styles.Title}>
                    <Text style={styles.TitleText}>회원가입</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="이메일" onChangeText={(text) => {setEmail(text);}}/>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="비밀번호(6자이상)" onChangeText={(text) => {setPassword(text); setPwdEnable(text.length >= 6)}}/>
                    <TextInput style={styles.input} placeholder="이름" onChangeText={(text) => {setName(text);}}/>
                </View>
                <View>
                    <Button title='가입하기' onPress={handleSumbit} disabled = {!pwdenable}/>
                </View>
            </View>
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
  Title: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin : 15,
  },
  TitleText:{
    fontSize: 30,
  },
  input:{
    width : 340,
    height : 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dedede',
    margin: 5,
    fontSize:15
  },


});


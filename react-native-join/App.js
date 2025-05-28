import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Alert } from './Alert';






export default function App() {

 const[userId, setUserId] = useState();
 const[password, setPassword] = useState();
 const[email, setEmail] = useState();





  return (
    <View style={styles.container}>
      <View style={styles.headerTop}></View>
      <View style={styles.header}><Text style={styles.headerText}>SmartAppDev</Text></View>
      <Text style={styles.title}>회원가입</Text>
      
      <View>
        <View style={styles.info}>
          <Text>아이디</Text>
          <View style={styles.inputBOX1}>
            <TextInput style={styles.input} keyboardType="default" value={userId} onChangeText={setUserId} placeholder="" />
          </View>
        </View>
     
        <View style={styles.info}>
          <Text>비밀번호</Text>
          <View style={styles.inputBOX2}>
            <TextInput style={styles.input}  keyboardType="visible-password" value={password} onChangeText={setPassword} placeholder="" />
          </View>
        </View>
        <View style={styles.info}>
          <Text>메일</Text>
          <View style={styles.inputBOX3}>
            <TextInput style={styles.input} keyboardType="default" value={email} onChangeText={setEmail} placeholder="" />
          </View>
        </View>
      </View>
      <View>
        <Alert userId={userId} email={email}/>
      </View>
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  headerTop : {
    margin:0,
    backgroundColor: "skyblue",
    width:"100%",
    height:25,
  },
  header : {
    marginTop: 0,
    backgroundColor: "blue",
    color : "#fff",
    width:"100%",
    height:70,
    alignItems: "start",
    justifyContent: "center",
  },
  headerText : {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color : "gray",
    margin: 50,
  },
  info: {
    flexDirection:"row",
    marginBottom:32
  },
  input: {
    width:200,
    height:50,
    marginTop:-20,
    
  },
  inputBOX1 : {
    borderBottomWidth: 1,
    borderBottomColor:"gray",
    marginLeft:40,
  },
  inputBOX2 : {
    borderBottomWidth: 1,
    borderBottomColor:"gray",
    marginLeft:28,
  },
  inputBOX3 : {
    borderBottomWidth: 1,
    borderBottomColor:"gray",
    marginLeft:54,
  },

  button : {
    width:160,
    borderRadius: 50,
    backgroundColor:"blue",
    color:"white",  
    marginTop:20
  }

});

import { useState } from "react"
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export const Alert = (props) => { 
    const user_Id = props.userId;
    const user_email = props.email;

    return(    
       <Button style={styles.button} title="가입하기" onPress={() => alert(`입력된 아이디는 ${user_Id}, 이메일은 ${user_email} 입니다`)}></Button>   
    )
      
   

}

const styles = StyleSheet.create({
 
  button : {
    width:160,
    borderRadius: 50,
    backgroundColor:"blue",
    color:"white",  
    marginTop:20
  }
})

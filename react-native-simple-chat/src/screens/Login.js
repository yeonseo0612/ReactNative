import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { Image, Input } from "../components/index.js";
import { images } from "../utils/images.js";
import { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { removeWhitespce, validateEmail } from "../utils/common.js";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ErrorText = styled.Text`
    align-items : flex-start;

    width: 100%;

    height : 20px;

    margin-bottom : 10px;

    line-height : 20px;

    color : ${({theme}) => theme.errorText};

`

const Login = ({ navigation }) => {
  //이메일 상태 관리
  const [email, setEmail] = useState('');
  //비밀번호 상태 관리
  const [password, setPassword] = useState('');
  //에러 메시지 상태 관리
  const [errorMessage, setErrorMessage] = useState('');
  //에러메시지 상태 관리
  const [disabled, setDisabled] = useState('');

  const passwordRef = useRef();

  //email,password, errorMessage의 state값이 변할때마다
  //조건에 맞게 disabled의 state에 값을 세팅한다
  useEffect(() => {
    //로그인 버튼은 이메일과 비밀번호가 입력되어있어야 하고

    setDisabled(!(email && password && !errorMessage));


  },[email, password, errorMessage])

  const _handleEmailChange = (email) => {

    //입력된 이메일에 공백이 있다면 먼저 지운다.
    const changedEmail = removeWhitespce(email);
    setEmail(changedEmail);
    setErrorMessage(
        validateEmail(changedEmail) ? '' : 'Please verifay your email'
    )

  }

  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespce(password));
  }

  const _handleLoginButtonPress = () => {

  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} extraScrollHeight={80} enableOnAndroid={true}>
      <Container>
        <Image url={images.logo} imageStyle={{ borderRadius: 40 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title='login'></Button>
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} isFilled={false}/>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
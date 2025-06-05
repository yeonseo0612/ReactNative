import styled from "styled-components/native";
import { View, Text, Alert } from "react-native";
import { Image, Input } from "../components/index.js";
import { images } from "../utils/images.js";
import { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { removeWhitespce, validateEmail } from "../utils/common.js";
import { login } from "../utils/firebase"; // 예: Firebase 로그인 함수 불러오기
import { Button } from "react-native"; // 실제 환경에 맞게 수정 (커스텀 버튼이면 해당 import 유지)

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const passwordRef = useRef();

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const _handleEmailChange = (email) => {
    const changedEmail = removeWhitespce(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : '올바른 이메일 형식을 입력해주세요.'
    );
  };

  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespce(password));
  };

  const _handleLoginButtonPress = async () => {
    try {
      const user = await login({ email, password });
      Alert.alert('로그인 성공', `${user.email}님 환영합니다.`);
    } catch (error) {
      Alert.alert('로그인 실패', error.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={80}
      enableOnAndroid={true}
    >
      <Container>
        <Image url={images.logo} imageStyle={{ borderRadius: 40 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="Login" onPress={_handleLoginButtonPress} disabled={disabled} />
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
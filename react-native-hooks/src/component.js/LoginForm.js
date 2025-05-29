import { useReducer } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const initialValue = {
  email: '',
  password: '',
  errorMessage: '',
  isSubmitting: false,
  isLoggedIn: false,
};

function loginReducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SUBMIT':
      return { ...state, isSubmitting: true, errorMessage: '' };
    case 'LOGIN_SUCCESS':
      return { ...state, isSubmitting: false, isLoggedIn: true };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isSubmitting: false,
        errorMessage: action.payload || '로그인 실패',
      };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, initialValue);

  const handleLogin = () => {
    dispatch({ type: 'SUBMIT' });

    // 로그인 시뮬레이션 (API 대신 타임아웃)
    setTimeout(() => {
      if (state.email === 'test@test.com' && state.password === '1234') {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({
          type: 'LOGIN_FAIL',
          payload: '이메일 또는 비밀번호를 잘못 입력했습니다',
        });
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        autoCapitalize="none"
        value={state.email}
        onChangeText={(text) => dispatch({ type: 'SET_EMAIL', payload: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={state.password}
        onChangeText={(text) => dispatch({ type: 'SET_PASSWORD', payload: text })}
      />

      {state.errorMessage ? (
        <Text style={styles.errorText}>{state.errorMessage}</Text>
      ) : null}

      {state.isLoggedIn ? (
        <Text style={styles.successText}>로그인 성공!</Text>
      ) : (
        <Button
          title={state.isSubmitting ? '로그인 중...' : '로그인'}
          onPress={handleLogin}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
});
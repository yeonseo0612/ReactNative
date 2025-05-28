import React, { useState } from 'react';
import {  Platform ,StyleSheet, Text, View } from 'react-native';
import { Header, Footer, Contents } from './components/Layout';
import FlexDirectionTest from './components/FlexDirection';
import JustifyContentTest from './components/JustifyContent';
import ShadowBox from './components/ShadowBox';
import MyButton from './components/Buttons';
import Input from './components/Input';
import styled,{ThemeProvider} from 'styled-components'
import {darkTheme,lightTheme, Theme} from './components/Theme'

const Container = styled.view`
  flex : 1;
  background-coor : ${props => props.theme.background};
  align-items : center;
  justify-content : center;

`


const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);
  return (
    <View
      style={
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        styles.container
      }
    >
    <ThemeProvider theme={isDark? darkTheme : lightTheme}>
         <Container>
                    {/* <FlexDirectionTest /> */}
              {/* {Platform.OS === 'ios' ? (<Text>Ios에서 실행중</Text>) : (<Text>안드로이드에서 실행중</Text>)} */}
              {/* <Text>현재 플랫폼 버전: {Platform.Version}</Text>
            {Platform.OS === 'android' && Platform.Version < 30 ? (
              <Text>이 기능은 Android 30 이상에서만 지원됩니다.</Text>
            ) : (
              <Text>현재 플랫폼에서 지원되는 기능입니다.</Text>
            )} */}
            {/* <ShadowBox /> */}
             <Switch value={isDark} onValueChange={_toggleSwitch} />
              <MyButton title="Hanbit" />
              <MyButton title="React Native" />
              <Input borderColor="#3498db" />
              <Input borderColor="#9b59b6" />
              {/* <Header />
                <Contents />
                  <Footer /> */}
            {/* <Text
              style={
              //   padding: 10,
              //   fontSize: 26,
              //   fontWeight: '600',
              //   color: 'black',
                  styles.text
              }
            >
              Inline Styling - Text
            </Text>
            <Text
              style={
              //   padding: 10,
              //   fontSize: 26,
              //   fontWeight: '400',
              //   color: 'red',
              styles.error
              }
            >
              Inline Styling - Error
            </Text> */}
      </Container>
    </ThemeProvider>
     
    
    </View>
  );
};

//인라인 스타일 방식으로 작성했을 때는 왜 color:'red'인지 콛만으로
//명확하게 이해하기 어려웠는데 StyleSheet를 사용하면 error라는 이름으로 오류가 있는 상황에서 사용하기 위한 것이라는 
//의돌르ㅡ 파악하기 쉽다.
//글자색을 변경하려고 할 때 클래스 스타일 방식에서는 error객체에서 색깔을 변경하면 되지만,
//인라인방식에서는 파일을 찾아다니면서 전부 다 변경해야 한다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
   padding: 10,
    fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});


// 우리가 작성한 App 컴포넌트 스타일 코드에서 text스타일과 error스타일은 중복된 스타일이 많으며, 두 스타일 모두 Text 컴포넌트에 적용되는 스타일이라는 공통접도 있다.
// 이렇게 중복된 코드를 제거하다 보면 스타일을 덮어쓰거나 하나의 컴포넌트에 여러 개의 스타일을 적용해야 할 때가 있다.
// 여러 개의 스타일을 적용해야 할 경우는 배열을 이용하여 style 속성에 여러 개의 스타일을 적용하면 된다.
// <View style={styles.container}>
//     <Text style={[styles.text, { color: 'green' }]}>
//     Inline Styling - Text
//     </Text>
//     <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
// </View>
// ...
// error: {
// fontWeight: '400',
// color: 'red',
// },
// 중복된 코드가 사라지면서 코드가 깔끔해지고 공통된 부분의 관리가 편해진다.
// 여러 개의 스타일을 적용할 때 주의할 점은 적용하는 스타일의 순서이다.
// 뒤에오는 스타일이 앞에 있는 스타일을 덮는다는 것을 기억해야 한다.
// 예를 들어 위의 코드에서 적용된 스타일의 순서를 [styles.error, styles.text]로 작성하면 글자의 색이 빨간색 대신 검은색으로 된다.
// 여러 개의 스타일을 적용할 때 반드시 클래스 스타일만 적용해야 하는 것은 아니다.
// 인라인 스타일과 클래스 스타일 방식을 혼용해서 사용할 수도 있다.
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={[styles.text, { color: 'green' }]}></Text>
export default App;

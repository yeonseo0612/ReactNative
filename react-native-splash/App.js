import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { IS_BROWSER } from 'styled-components/dist/constants';

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration : 1000,
//   fade : true,
// })


export default function App() {
  //앱 준비 완료 여부 상태
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    //비동기로 초깊 리소스 로딩 작업을 해주는 함수
    async function prepare() {
     try{
      //Entypo 아이콘 폰트를 미리 로딩
       await Font.loadAsync(Entypo.font);

       //테스트용으로 일부러 2초 동안 지연시키는 코드 
       await new Promise(resolve => setTimeout(resolve, 2000))
     } catch(error){
       console.warn(e);
     }finally{
      setIsReady(true);
     }
    }

    //준비된 화면을 실행
    prepare();

  },[])
  //최초 화면이 준비되면 스플래시 화면을 숨기기 위한 함수
  const onLayoutRootView = useCallback(() => {
    //앱이 준비되었을 떄
    if(isReady){
      SplashScreen.hide(); //스플래시 화면을 종료

    }

  }, [isReady]) //isReady값이 변경될 때만 새로 정의한다.

  if(!isReady){
    return null;
  }
  return (
    <View style={styles.container}
    // View가 그려진 직후에 호출되는 이벤트
    onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo!</Text>
      <Entypo name='roket' size={30}></Entypo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

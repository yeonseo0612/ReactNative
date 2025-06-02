import React from 'react';
import styled from 'styled-components/native';
import StackNavigation from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/Tab';
import DrawerkNavigation from './navigation/Drawer';


const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items : center;
`

const App = () => {
  return (
    //NavigationContainer : 해당 컴포넌트로 둘러싼 컴포넌트에 네비게이션 기능을 적용해주는 컴포넌트
    <NavigationContainer>
      
        {/* <TabNavigation /> */}
        {/* <StackNavigation /> */}
        <DrawerkNavigation
          screenOptions={{
            //드로어의 스타일(배경색, 너비 등)을 지정
              drawerStyle: { backgroundColor: '#e6e6e6', width: 240 },
              // 드로어 라벨의 텍스트 스타일(글자크기, 두께, 색깔, 정렬, 자간)
              drawerLabelStyle: { fontSize: 18 },
              //선택된 드로어의 색상
              drawerActiveTintColor: '#4CAF50',
              drawerInactiveTintColor: '#757575',
              borderWidth: 3, 
              borderColor: '#ccc', 
              headerShown: true,
              drawerPosition : 'right'
              }}
        />
    </NavigationContainer>
  );
};

export default App;
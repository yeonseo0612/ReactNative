import React from 'react';
import styled from 'styled-components';
import {UserProvider} from "./context/UserContext"
import HomeScreen from './component/HomeScreen';
import { ThemeProvider } from './context/ThemeContext'
import ThemeComponent from './component/ThemeComponent';
const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items : center;
`;

const App = () => {
    return (
        //Provider 컴포넌트로부터 value를 전달하는 하위 컴포넌트의 수에는 제한이 없다.
        //하지만 Consumer 컴포넌트는 가장 가까운 Provider 컴포넌트에서 값을 받으므로
        //자식 컴포넌트 중 Provider 컴포넌트가 있다면 그 중간에 있는 내용을 사용을 한다.
    // <UserContext.Provider value={{name:'Gildong'}}>
    //     <Container>
    //         <User />
    //     </Container>
    // </UserContext.Provider>

    // <ThemeProvider>
    //   <ThemeComponent />
    // </ThemeProvider>
     <UserProvider>
      <HomeScreen />
    </UserProvider>
    )
}

export default App;
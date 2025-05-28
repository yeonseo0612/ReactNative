import React from 'react';
import styled from 'styled-components/native';
import UserContext from '../contexts/User';


const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

//Consumer
//Consumer 컴포넌트는 상위 컴포넌트 중 가장 가까운 곳에 있는 Provider 컴포넌트가 전달하는 데이터를 이용한다.
//Provider 컴포넌트가 없다면 createContext함수의 파라미터로 전달된 기본값을 사용한다.
const User = () => {
    return (
        <UserConsumer>
          {({user}) => <StyledText>Name: {user.name}</StyledText>}
        </UserConsumer>
    );
};

export default User;
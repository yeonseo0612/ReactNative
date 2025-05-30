import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex : 1;
  justify-content : center;
  background-color : #fff;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

//Stack.screen에 등록만 하면 별도의 props 전달 없이도 자동으로
const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button title="go to the list screen" onPress={() => {navigation.navigate('List')}}/>
    </Container>
  );
};

export default Home;
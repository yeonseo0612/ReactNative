import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  { _id: 1, name: 'React Native' },
  { _id: 2, name: 'React Navigation' },
  { _id: 3, name: 'Hanbit' },
];

const List = ({ navigation }) => {  // navigation 받아오기
  const _onPress = (item) => {
    navigation.navigate('Item', { id: item._id, name: item.name });  // 대소문자 주의 (Item)
  };

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}  // _onPress 함수 호출
        />
      ))}
    </Container>
  );
};


export default List;
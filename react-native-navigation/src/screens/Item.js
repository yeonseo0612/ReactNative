import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = ({ route, navigation }) => {
  const { id, name } = route.params;

  // 화면 타이틀 동적으로 설정
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor : '#fff',
      headerLeft : ({onPress, tintColor}) => {

        return(
          <MaterialCommunityIcons 
              name='arrow-left' 
              size={30} 
              style={{marginLeft: 11} } 
              color={tintColor} 
              onPress={onPress} 
          />
        )
      },

      
    });

    headerRight = ({tintColor}) => {
        <MaterialCommunityIcons 
            name='home-variant' 
            size={30} 
            style={{marginRight: 11}} 
            color={tintColor} 
            onPress={() => 
            navigation.popToTOP()}
        />
      }
     
  }, [navigation, name]);

  return (
    <Container>
      <StyledText>Item</StyledText>
      <StyledText>ID : {id}</StyledText>
      <StyledText>Name : {name}</StyledText>
    </Container>
  );
};

export default Item;
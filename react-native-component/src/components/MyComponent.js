import { Pressable, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

// let props = {"title" : "button"}
// defaultProps가 작동이 안되는 경우
// 구조분해할당으로 기본값을 부여한다.



const MyButton = ({ title = 'Button', children }) => {
  // children이 실제로 존재하는지 정확히 판단
  const hasValidChildren = React.Children.count(children) > 0;

  return (
    <Pressable
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 24, color: '#fff' }}>
        {hasValidChildren ? children : title}
      </Text>
    </Pressable>
  );
};
MyButton.defaultProps = {
    title: 'Button'
}
//타이틀에는 문자열이 넘어오지만, propTypes를 이용해 title에 전달되어야 하는 값의 타입이 숫자여야한다고 지정을 했따.
MyButton.PropTypes = {
    title: PropTypes.number
}

export default MyButton;
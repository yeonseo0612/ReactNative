import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

const TRANSPARENT = 'transparent'

// Pressable에 disabled prop을 안전하게 넘기기 위해 attrs 사용
const Container = styled.Pressable.attrs(({ disabled }) => ({
  disabled, // ← 이걸로 Pressable에 안전하게 전달
}))`
  background-color: ${({ theme, isFilled }) => (isFilled ? theme.buttonBackground : TRANSPARENT)};
  align-items: center;
  border-radius: 4px;
  width: 90%;
  padding: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`

    height : 30px;
    line-height : 30px;
    font-size : 16px;
    color : ${({theme,isFilled}) => isFilled ? theme.buttonTile : theme.buttonUnFilledTitle};

`

const Button = ({

    containerStyle,
    title,
    onPress,
    isFilled = true,
    disabled = false, // 외부에서 전달받는 비활성화 상태

}) => {

    return(
    <Container
        style ={containerStyle}
        onPress={!disabled ? onPress : null}
        isFilled={isFilled}
        disabled={disabled} // Pressable에 disabled 전달
    >

        <Title isFilled={isFilled}>{title}</Title>

    </Container>
    )
}

export default Button


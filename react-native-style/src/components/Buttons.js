import styled from 'styled-component'
import {Pressable} from 'react-native'

//백틱안에 rpops에 접근할 수 잇다는 장점을 이요해 값에 따라 스타읿  ㅕㄴ경도 가능
const ButtonContainer = styled.Pressable`
    background-color: ${props => props.title === 'Hanbit' ? props.theme.blue : props.theme.purple};

    padding : 14px 24px;
    border-radius : 8px;
    align-items : center;
    margin: 10px;

`
const ButtonText = styled.Text`
    color: #fff;
    font-size : 18px;
    font-weight: bold;

`

const MyButton = (props) => {
    return(
        <ButtonContainer>
            <ButtonText>{props.title}</ButtonText>
        </ButtonContainer>
    )
}

export default MyButton;
import styled from "styled-components";
import {Input, Button} from '../components';
import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespce } from "../utils/common";
import { useEffect } from "react";
const Container = styled.View`
    align-self : center;
    margin-bottom : 30px;
    
`
const ButtonContainer =styled.Pressable`
 background-color: ${({theme}) => theme.imageButtonBackground};
 posgition : absolute;
 bottom : 0;
 right : 0;
 width : 30px;
 border-radius : 15px;
 justify-content : 'center'
 align-items : center;

`

const StyledImage = styled.Image`
    background-color : ${({theme}) => theme.ImageBackground};
    width : 100px;
    height : 100px;
    borderRadius : ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera'
})
const _handleEditButton = async () => {
    //이미자 라이브러리에서 이미지를 선택살 수있는 인터페이스르 ㄹ띄운다.
    //사용자가 이미지를 선택하면, 그 결과를 반환하고
    //취소하면 canceled : true를 반환한다.
    const result = await ImagePicker.launchImageLibraryAsync({
        //이미지 타입만 선택할 수 있도록 설정
        mediaTypes : ['images'],
        allowsEditing : true,
        aspect:[1,1],
        quality : 1,
    })
    try{
    if(!result.canceled){
        //선택된 이미지 정보가 담긴 배열의 첫번쨰 항목에서 uri를 추출한다.
        const imageUri = result.assets[0].uri;

        onChangeImage(imageUri);}
    }catch(error){
        alert('Phot Error', error.message);
    }
}

const Image = ({url, imageStyle, rounded}) => {
    useEffect(() => {
        requestPermission(); //캄포넌트마우ㅏㄴ트시 권한을 요청
       
    },[]);
    return(
        <Container>
            <StyledImage source={{uri : url}} style={imageStyle} rounded={rounded} />
        </Container>
        // {showButton이 true면 버튼을 렌더링}
    )
}

export default Image;

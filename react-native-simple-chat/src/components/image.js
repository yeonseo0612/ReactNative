import styled from "styled-components";
import { Input, Button } from '../components';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespce } from "../utils/common";
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // ✅ 권한 요청을 위한 라이브러리 추가

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.Pressable`
    background-color: ${({ theme }) => theme.imageButtonBackground};
    position: absolute; // ✅ 오타 수정: posgition → position
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.ImageBackground};
    width: 100px;
    height: 100px;
    border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera'
})``;

// 이미자 라이브러리에서 이미지를 선택살 수있는 인터페이스르 띄운다.
// 사용자가 이미지를 선택하면, 그 결과를 반환하고
// 취소하면 canceled: true를 반환한다.
const _handleEditButton = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        // 이미지 타입만 선택할 수 있도록 설정
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    try {
        if (!result.canceled) {
            // 선택된 이미지 정보가 담긴 배열의 첫번째 항목에서 uri를 추출한다.
            const imageUri = result.assets[0].uri;
            onChangeImage(imageUri); // onChangeImage 함수는 props로 전달받아야 함 (아래에서 처리)
        }
    } catch (error) {
        alert('Photo Error', error.message);
    }
};

// 컴포넌트 마운트 시 권한을 요청
const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('이미지 접근 권한이 필요합니다.');
    }
};

const Image = ({ url, imageStyle, rounded, showButton = false, onChangeImage = () => {} }) => {
    useEffect(() => {
        requestPermission(); // 컴포넌트 마운트 시 권한 요청
    }, []);

    return (
        <Container>
            <StyledImage source={{ uri: url }} style={imageStyle} rounded={rounded} />
            {/* showButton이 true면 버튼을 렌더링 */}
            {showButton && (
                <ButtonContainer onPress={_handleEditButton}>
                    <ButtonIcon size={22} color="#fff" />
                </ButtonContainer>
            )}
        </Container>
    );
};

export default Image;
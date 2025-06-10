// import React from "react";
// // styled-components를 가져온다
// import styled from "styled-components";
// import {Text} from 'react-native'

// // Container 컴포넌트: 채팅 화면 전체를 감싸는 View로, 테마의 background 색상을 적용합니다.
// const Container = styled.View`
//     flex: 1;
//     background-color: ${({theme})=> theme.background};
// `;

// // Channel 컴포넌트: 채팅 채널 화면을 렌더링합니다.
// // 넘겨받은 채널의 id
// const Channel = () => {
//     return(
//         <Container>
//             <Text style={{ fontSize: 24 }}>Channel</Text>
//         </Container>
//     )
// }

// export default Channel;

import React from "react";
import styled from "styled-components";
import {Text} from 'react-native'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.background};
`;

const Channel = ({route}) => {
    return(
        <Container>
            <Text style={{fontSize : 24}}>{route.params?.id}</Text>
            <Text style={{fontSize : 24}}>{route.params?.title}</Text>
        </Container>
    )
}

export default Channel;
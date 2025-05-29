import styled from "styled-components";
import Counter from "./component.js/Counter";
import Parent from "./component.js/Parent";
import Form from "./component.js/Form";
import Signup from "./component.js/Signup";
import ChangeTheme from "./component.js/ChangeTheme";
import Counter2 from "./component.js/Counter2";
import LoginForm from "./component.js/LoginForm";
const Container = styled.View`
    flex: 1;
    background-color : #fff;
    justify-content: center;
    align-items : center;

`
const App = () => {

        return <Container>
                {/* <Counter />
                <Parent /> */}
                {/* 버튼을 하나 만들고 title은 Hide, Form안보일 때는 Show 버튼을 눌렀을 떄 Form을 숨기거나, 보이게 만들기 */}
                    
                {/* <Form />
                <Signup></Signup> */}
                {/* <ChangeTheme /> */}
                {/* <Counter2 />+ */}
                <LoginForm />
        </Container>
}


export default App;
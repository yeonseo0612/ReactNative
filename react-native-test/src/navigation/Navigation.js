import { createStackNavigator } from "@react-navigation/native-stack";
import login from '../screens/login.js';
import Signup from "../screens/Signup.js";


const Stack = createStackNavigator();

const StackNavigation = () => {

  return(
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen
        name={"login"}
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerBackTitle : '',}}

      />
    </Stack.Navigator>
  )
    
};
export default StackNavigation;
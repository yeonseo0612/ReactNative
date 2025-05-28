// src/App.js
import React from 'react';
import { View, Text, Button, StyleSheet,  ScrollView, Pressable} from 'react-native';
import MyButton from './components/MyComponent';
import Counter from './components/Counter'
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import { P_Button } from './components/PressableButton';
import FlexDirectionTest from '../../react-native-style/src/components/FlexDirection';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Button Component</Text>
//       <Button title="button" onPress={() => alert('Click!!')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
// });


const App = () => {
    return(
        <View
          
        >
            {/* <Text style={{fontSize:30, marginBottom:10}}>Button Component</Text>
             <Button title="button" onPress={()=> alert('Click!!')}/> 
            <MyButton title="Button"  onPress={()=> alert('props')}/>
            <MyButton title="Button"  onPress={()=> alert('children')}> Children Props</MyButton>
            <MyButton  onPress={()=> alert('default')}/> */}
            {/* <Counter /> */}
            {/* <EventButton />
            <EventInput />
            <P_Button />
            */}
             <FlexDirectionTest />
        </View>
    )
}

export default App;
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
});

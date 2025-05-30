import { _Signup } from './Signup';
import { StyleSheet, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <_Signup></_Signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

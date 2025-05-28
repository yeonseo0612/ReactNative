import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import {Fragment} from 'react/jsx-runtime';

export default function App() {
  const name = "Hanbit"
  console.log('expo devtools log test');
  return (
    <Fragment>
      <Text style={{fontSize:20}}>{name == "Hanbit1" || "Default Name"}</Text>
      <StatusBar style="auto" />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18, // ✅ 숫자만 씁니다!
    fontWeight: 'bold', // 옵션 (굵기)
  },
});
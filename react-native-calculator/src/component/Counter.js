import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("숫자를 입력하세요.");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) {
          setResult("0으로 나눌 수 없습니다.");
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult("잘못된 연산자입니다.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>첫 번째 숫자</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="숫자 입력"
      />

      <Text style={styles.label}>두 번째 숫자</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="숫자 입력"
      />

<View style={styles.buttonRow}>
  <View style={styles.buttonWrapper}>
    <Button title="+" onPress={() => calculate("+")} />
  </View>
  <View style={styles.buttonWrapper}>
    <Button title="-" onPress={() => calculate("-")} />
  </View>
  <View style={styles.buttonWrapper}>
    <Button title="×" onPress={() => calculate("*")} />
  </View>
  <View style={styles.buttonWrapper}>
    <Button title="÷" onPress={() => calculate("/")} />
  </View>
</View>

      {result !== null && (
        <Text style={styles.result}>결과: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
  },
  button: {
    margin: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonWrapper:{
    margin: 4,
  },
});

export default Calculator;
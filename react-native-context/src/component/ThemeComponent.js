import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemeComponent() {
  const { isDark, backgroundColor, textColor, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        현재 테마: {isDark ? '다크모드' : '라이트모드'}
      </Text>
      <Button
        title="테마 변경"
        onPress={toggleTheme}
        color={isDark ? '#aaa' : '#444'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
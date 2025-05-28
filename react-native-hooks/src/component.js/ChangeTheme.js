import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useToggle from '../hooks/useToggle';

export default function ChangeTheme() {
  const [isOn, toggle] = useToggle();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggle}
        style={[styles.button, { backgroundColor: isOn ? 'green' : 'gray' }]}
      >
        <Text style={styles.buttonText}>{isOn ? '끄기' : '켜기'}</Text>
      </TouchableOpacity>
      <Text style={styles.statusText}>현재 상태: {isOn ? 'On' : 'Off'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  statusText: {
    marginTop: 20,
    fontSize: 16,
  },
});
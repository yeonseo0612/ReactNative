import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen() {
  const { cart, dispatch } = useContext(CartContext);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (itemName.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: itemName });
      setItemName('');
    }
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="상품 이름 입력"
        style={styles.input}
      />
      <Button title="상품 추가" onPress={addItem} />

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.delete}>삭제</Text>
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  delete: {
    color: 'red',
  },
});
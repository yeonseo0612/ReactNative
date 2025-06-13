import React from 'react';
import {Text, Image, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {book.image ? (
        <Image
          source={{ uri: book.image }}
          style={{ width: 150, height: 200, marginBottom: 20 }}
        />
      ) : null}

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        {book.title}
      </Text>
      <Text style={{ marginBottom: 5 }}>저자: {book.author}</Text>
      <Text style={{ marginBottom: 5 }}>출판사: {book.publisher}</Text>
      <Text style={{ marginBottom: 10 }}>가격: {book.price}원</Text>
      <Text>{book.description}</Text>
    </ScrollView>
  );
}

export default DetailScreen
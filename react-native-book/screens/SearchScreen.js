import React, {useState} from 'react';
import {View, Text, Pressable, Button, FlatList, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {searchBooks} from '../api/naverApi';
import BookItem from '../components/BookItem';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [searched, setSearched] = useState(false);
    const navigation = useNavigation();
    
    const handleSearch = async () => {
          console.log(query)
        const result = await searchBooks(query);
        setBooks(result);
        setSearched(true);
    };

  

    return(

     <View style={{ padding: 20, flex: 1 }}>
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder="도서명을 입력하세요"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        
        }}
      />
      
      <Button title="검색" onPress={handleSearch} />

      {searched && books.length === 0 && (
        <Text style={{ marginTop: 20, textAlign: 'center', color: '#888' }}>
          검색 결과가 없습니다.
        </Text>
      )}

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Detail', { book: item })}
            style={({ pressed }) => ({
              padding: 12,
              backgroundColor: '#eee',
              borderBottomWidth: 1,
              borderColor: '#ccc',
            })}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.author}</Text>
          </Pressable>
        )}
      />
    </View>

    )
}

export default SearchScreen
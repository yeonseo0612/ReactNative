import React from "react";
import {Pressable, Text} from 'react-native';

const BookItem = ({book, onPress}) => {

return(
    <Pressable onPress={onPress}>
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
    </Pressable>
)

}

export default BookItem;
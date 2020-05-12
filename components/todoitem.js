import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function todoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}> {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
         padding: 15,
         marginTop: 10,
         borderColor: '#000',
         borderWidth: 1,
         borderStyle: "dashed",
         borderRadius: 10,
    },
})
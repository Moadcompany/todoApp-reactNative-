import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function todoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
        <Text style={styles.text}> {item.text}</Text>
        </View>
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
         flexDirection: 'row',
    },
    text:{
        marginLeft: 15,
        
    }
})
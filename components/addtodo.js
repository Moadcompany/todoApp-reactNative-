import React, { useState } from 'react';
import { StyleSheet,TextInput , View, Text, Button} from 'react-native';

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        
        <View style={styles.input}>
            <Text></Text>
            <TextInput placeholder = 'what you have to do ? '
            onChangeText={changeHandler}/>
            <Text></Text>
        <Button
            onPress={() => submitHandler(text)} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderBottomColor: '#ddd',

    }

});
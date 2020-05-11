import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
const [people, setPeople] = useState([

  {name: 'moad', id:'1'},
  {name: 'moad2', id:'2'},
  {name: 'moad3', id:'3'},
  {name: 'moad4', id:'4'},
  {name: 'moad5', id:'5'},
  {name: 'moad6', id:'6'},
  {name: 'moad6', id:'7'},

]);

  return (
    <View style={styles.container}>

    {people.map((v) => {
      return (
        <View> 
        <Text> {v.name} </Text>
        </View>
      )
    } )}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



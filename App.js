import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import Addtodo from './components/addtodo'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'todo number1', key:'1'},
    {text: 'todo number2', key:'2'},
    {text: 'todo number3', key:'3'},
    {text: 'todo number4', key:'4'},
    {text: 'todo number5', key:'5'},
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos ((prevTodos)=>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.content}>
      <Addtodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          
          <FlatList 
            data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler = {pressHandler} />
            )}

            />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
  
    content: {
      flex:1
    },

    list:{
      textAlign: "center",
      padding: 20,
      marginLeft: 10,
      flex:1

    },

});



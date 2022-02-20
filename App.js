import React , {useState} from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import Constants from 'expo-constants';
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addTodo";

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
// function for deleting the items from list
  const pressHandler = (key) =>{
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  };

// funct for adding item in the list
  const submitHandler =(text)=>{
    setTodos((prevTodos)=>{
      return[
        
          {text:text, key: Math.random().toString()},
          ...prevTodos
        
      ]
    }
    )

  }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View sttyle={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler= {pressHandler}></TodoItem>
            )
            }
          />

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  content: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

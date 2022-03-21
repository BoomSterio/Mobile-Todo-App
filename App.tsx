import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { AddTodo, Navbar, TodoList } from './src/components';

export interface Todo {
  id: string;
  label: string;
  done: boolean;
}

const initialList = [
  {id: '1', label: 'Bread', done: false},
  {id: '2', label: 'Milk', done: true},
  {id: '3', label: 'Eggs', done: true},
  {id: '4', label: 'Apples', done: true},
  {id: '5', label: 'Ginger', done: false},
  {id: '6', label: 'Tea', done: false},
  {id: '7', label: 'Onions', done: false},
  {id: '8', label: 'Meat', done: false},
]

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialList)

  const addTodo = (label: string) => {
    if (!label.trim()) {
      Alert.alert('Title must not be empty!')
      return
    }

    const newTodo = {
      id: Date.now().toString(),
      label,
      done: false
    }
    setTodos(prev => ([...prev, newTodo]))
  }

  const deleteTodo = (todoId: string) => {
    setTodos(prev => prev.filter(current => todoId !== current.id))
  }

  const changeTodoStatus = (todoId: string) => {
    setTodos(prev => prev.map(current => current.id === todoId ? {...current, done: !current.done} : current))
  }

  const deleteAllTodos = () => {
    if (!todos.length) {
      return
    }
    Alert.alert(
      "Confirm action",
      "Are you sure you want to delete all todos?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => setTodos([]) }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar title='Todo app' onPress={deleteAllTodos} />
      <View style={styles.content}>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onDone={changeTodoStatus} />   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  }
});

export default App
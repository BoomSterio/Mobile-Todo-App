import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";
import { Todo } from "../../../../App";
import Icon from 'react-native-vector-icons/AntDesign'

interface TodoProps {
  todo: Todo;
  index: number;
  onDeleteTodo: (todoId: string) => void;
  onDone: (todoId: string) => void;
}

export const TodoItem = ({todo: {id, label, done}, index, onDeleteTodo, onDone}: TodoProps) => {
  const titleStyle: TextStyle = {
    textDecorationLine: done ? 'line-through' : 'none'
  }

  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={styles.todo}>
        <Text style={[styles.title, titleStyle]} onPress={() => onDone(id)}>{index + 1}. {label}</Text>
        <Icon name={'close'} size={22} color={'red'} onPress={() => onDeleteTodo(id)}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff'
  },
});
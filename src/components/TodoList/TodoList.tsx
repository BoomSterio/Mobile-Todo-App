import { FlatList, StyleSheet, Text, View } from "react-native";
import { Todo } from "../../../App";
import { TodoItem } from "./components/TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (todoId: string) => void;
  onDone: (todoId: string) => void;
}

export const TodoList = ({todos, onDeleteTodo, onDone}: TodoListProps) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={todos}
      renderItem={({item, index}) => (
        <TodoItem todo={item} index={index} onDeleteTodo={onDeleteTodo} onDone={onDone} />
      )}
      style={styles.wrapper}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 24,
  },
});
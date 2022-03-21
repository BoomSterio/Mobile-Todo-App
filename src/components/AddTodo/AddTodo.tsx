import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface AddTodoProps {
  addTodo: (todo: string) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [value, onChangeValue] = useState('')

  const handleSubmit = () => {
    onChangeValue('')
    addTodo(value)
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input} 
        value={value} 
        onChangeText={onChangeValue} 
        placeholder='Enter todo title...'
        placeholderTextColor={'grey'}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Icon name={'plus'} size={26} color={!value.trim() ? 'grey' : '#3949ab'} onPress={handleSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    color: '#fff',
    width: '75%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    marginRight: 24
  },
});
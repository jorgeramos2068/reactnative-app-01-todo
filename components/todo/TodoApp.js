import React, { useState } from 'react';
import { FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Form from './Form';
import Header from './Header';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { key: '1', text: 'Example 1' },
    { key: '2', text: 'Example 2' }
  ]);

  const handleDismiss = () => {
    Keyboard.dismiss();
  };

  const handleDelete = (key) => {
    setTodos(todos.filter(todo => todo.key !== key));
  }

  const handleAdd = (item) => {
    setTodos([...todos, item]);
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form handleAdd={handleAdd} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%'
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});

export default TodoApp;

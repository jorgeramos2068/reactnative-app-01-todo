import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoApp from './components/todo/TodoApp';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

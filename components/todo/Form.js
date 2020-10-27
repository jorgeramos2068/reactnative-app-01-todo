import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

const Form = ({handleAdd}) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  const handlePress = () => {
    if (text !== '') {
      const newItem = {
        key: new Date().getTime(),
        text: text
      };
      handleAdd(newItem);
      setText('');
    } else {
      Alert.alert('Error', 'Text cannot be empty', [
        {text: 'Understood', onPress: () => console.log('Alert closed')}
      ]);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="New todo..."
        onChangeText={handleChange}
        value={text}
        style={styles.input}
      />
      <Button
        onPress={handlePress}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  }
});

export default Form;

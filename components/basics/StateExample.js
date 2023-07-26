import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

const StateExample = () => {
  const [name, setName] = useState('Batman');
  const [age, setAge] = useState('');

  const handlePress = () => {
    if (name === 'Batman') {
      setName('Superman');
    } else {
      setName('Batman');
    }
  };

  const handleChangeText = (value) => {
    setAge(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello World.</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Current name: <Text style={styles.boldText}>{name}</Text>
        </Text>
        <Text>
          Current age: <Text style={styles.boldText}>{age}</Text>
        </Text>
        <Text style={styles.mt2}>Enter age:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="e.g. 30"
          onChangeText={handleChangeText}
        />
        <Button
          title="Change name"
          onPress={handlePress}
        />
        <List />
      </View>
      <View style={styles.buttonContainer}>
        <Text>Footer</Text>
      </View>
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
  header: {
    backgroundColor: 'aqua',
    padding: 20,
    textAlign: 'center',
    width: '100%'
  },
  body: {
    flex: 1,
    padding: 20,
    width: '100%'
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  },
  input : {
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    margin: 10,
    padding: 8,
    width: '100%'
  },
  mt2: {
    marginTop: 20
  }
});

export default StateExample;

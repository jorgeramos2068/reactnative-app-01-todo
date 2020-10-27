import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item, handleDelete}) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color='#333' />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    borderColor: '#bbb',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 16,
    padding: 16,
  },
  itemText: {
    marginLeft: 10
  }
});

export default TodoItem;

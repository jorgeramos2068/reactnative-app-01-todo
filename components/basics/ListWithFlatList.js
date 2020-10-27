import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View 
} from 'react-native';

const ListWithFlatList = () => {
  const initialState = [
    { id: '1', name: 'Batman' },
    { id: '2', name: 'Superman' },
    { id: '3', name: 'Spiderman' },
    { id: '4', name: 'Flash' },
    { id: '5', name: 'Wonder Woman' },
    { id: '6', name: 'Iron man' },
  ];
  const [people, setPeople] = useState(initialState);

  const handlePress = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  item: {
    backgroundColor: 'pink',
    fontSize: 24,
    marginTop: 24,
    padding: 30,
  }
});

export default ListWithFlatList;

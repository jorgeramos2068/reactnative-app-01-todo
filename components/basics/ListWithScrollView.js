import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View 
} from 'react-native';

const ListWithScrollView = () => {
  const initialState = [
    { key: '1', name: 'Batman' },
    { key: '2', name: 'Superman' },
    { key: '3', name: 'Spiderman' },
    { key: '4', name: 'Flash' },
    { key: '5', name: 'Wonder Woman' },
    { key: '6', name: 'Iron man' },
  ];
  const [people, setPeople] = useState(initialState);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(({key, name}) => (
          <View key={key}>
            <Text style={styles.item}>{name}</Text>
          </View>
        ))}
      </ScrollView>
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

export default ListWithScrollView;

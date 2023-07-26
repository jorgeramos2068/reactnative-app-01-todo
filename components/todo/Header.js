import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todos App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 80,
    paddingTop: 38,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Header;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './components/Container'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', marginTop: '6%'}}>FIRST NATIVE APP</Text>
      <Text style={{color: 'red'}}>red</Text>
      <Text style={{color: 'orange'}}>orange</Text>
      <Text style={{color: 'yellow'}}>yellow</Text>
      <Text style={{color: 'green'}}>green</Text>
      <Text style={{color: 'blue'}}>blue</Text>
      <Text style={{color: 'purple'}}>purple</Text>
      <Container />
      <Container />
      <Container />
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

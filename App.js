import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './components/Container'

export default class App extends Component {

  state = {
    photos: []
  }

  componentDidMount() {
    //fetch photos
    fetch('http://localhost:3000/photos')
    .then(res => res.json())
    .then(data => {
      console.log(data.photos.length);
      this.setState({photos: data.photos})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', marginTop: '6%'}}>THIS IS APP</Text>
        <Text style={{color: 'red'}}>red</Text>
        <Text style={{color: 'orange'}}>orange</Text>
        <Text style={{color: 'yellow'}}>yellow</Text>
        <Text style={{color: 'green'}}>green</Text>
        <Text style={{color: 'blue'}}>blue</Text>
        <Text style={{color: 'purple'}}>purple</Text>
        <Container photos={this.state.photos}/>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

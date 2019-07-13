import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card'

export default class Container extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>THIS IS CONTAINER</Text>
        <Text style={{color: 'red'}}>red</Text>
        <Text style={{color: 'orange'}}>orange</Text>
        <Text style={{color: 'yellow'}}>yellow</Text>
        <Text style={{color: 'green'}}>green</Text>
        <Text style={{color: 'blue'}}>blue</Text>
        <Text style={{color: 'purple'}}>purple</Text>
        {this.props.photos &&
          this.props.photos.map(photo => {
            console.log(photo);
            return <Card photo={photo}/>
          })
        }
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

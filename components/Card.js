import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends Component {

  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>THIS IS A CARD</Text>
        <Image source={{uri: this.props.photo.url, width: 64, height: 64}} />
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

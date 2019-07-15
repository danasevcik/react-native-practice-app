import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.photo, width: 410, height: 410}} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%'
  },
});

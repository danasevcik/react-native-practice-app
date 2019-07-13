import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'

export default class Container extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.photos &&
          this.props.photos.map(photo => {
            console.log(photo);
            return <Card photo={photo}/>
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    height: '100%',
    width: '100%'
  },
});

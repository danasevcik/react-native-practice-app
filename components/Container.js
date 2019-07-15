import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import Card from './Card'
import NewComponent from './NewComponent'

export default class Container extends Component {

  state = {
    click: false
  }

  handleClick = () => {
    console.log('in handle click');
    this.setState({click: !this.state.click})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.click ?
          <Button title="HIDE SPONGEBOB" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={() => {
              Alert.alert('BYE!');
              this.handleClick()
              console.log('here');
            }}/>
          :
          <Button title="CLICK ME" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={() => {
              Alert.alert('Look who it is!');
              this.handleClick()
              console.log('here');
            }}/>

        }
        <ScrollView>
          {this.props.photos &&
            this.props.photos.map(photo => {
              console.log(photo);
              return <Card photo={photo}/>
            })
          }
        </ScrollView>
        {this.state.click ? <NewComponent photo={'https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949'}/> : null}
      </View>
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

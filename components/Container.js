import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, FlatList, TextInput, TouchableHighlight } from 'react-native';
import Card from './Card'
import NewComponent from './NewComponent'

export default class Container extends Component {

  state = {
    click: false,
    text: "Start Typing...",
    username: "Username"
  }

  handleClick = () => {
    this.setState({click: !this.state.click})
  }

  onPress = () => {

  }

  render() {
    return (
      <View style={{backgroundColor: this.props.color, height: '100%', width: '100%', flex: 1}}>
        {this.state.click ?
          <Button title="HIDE SPONGEBOB" color="#841584" accessibilityLabel="Click to hide spongebob" onPress={() => {
              Alert.alert('BYE!');
              this.handleClick()
            }}/>
          :
          <Button title="CLICK ME" accessibilityLabel="Click to show spongebob" onPress={() => {
              Alert.alert('Look who it is!');
              this.handleClick()
            }}/>
        }
        <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, margin: 5, padding: 5}} value={this.state.text} onChangeText={(text) => this.setState({text})}></TextInput>
        <TextInput style={{height: 20, borderColor: 'black', borderWidth: 1, margin: 5, padding: 3}} value={this.state.username} onChangeText={(username) => this.setState({username})} autoCompleteType={'username'}></TextInput>

        <TouchableHighlight style={styles.button} onPress={this.onPress}>
          <Text> Click For Touchable Highlight </Text>
        </TouchableHighlight>

        <ScrollView>
          {this.props.photos &&
            this.props.photos.map(photo => {
              console.log(photo);
              return <Card photo={photo}/>
            })
          }
        </ScrollView>
        {this.state.click && <NewComponent photo={'https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949'}/>}
        <FlatList
          data={[
            {key: 'THIS'},
            {key: 'IS...'},
            {key: 'A'},
            {key: 'PRACTICE'},
            {key: 'FLAT'},
            {key: 'LIST'},
            {key: 'WITH'},
            {key: 'SCROLL'},
            {key: 'WHEN'},
            {key: 'THE'},
            {key: 'ITEM'},
            {key: 'IS'},
            {key: 'IN'},
            {key: 'SIGHT'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 10,
    height: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'hotpink',
    padding: 10,
    margin: 10,
    borderWidth: 5,
    borderColor: 'white'
  },
});

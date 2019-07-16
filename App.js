import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import Container from './components/Container'

export default class App extends Component {

  state = {
    photos: null,
    modalVisible: false
  }

  componentDidMount() {
    //fetch photos
    this.setState({photos: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80', 'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80', 'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80', 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80']})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{marginTop: 30}}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100, alignItems: 'center', justifyContent: 'center'}}>
              <View>
                <Text style={{color: 'hotpink', fontSize: 100}}>Hello World!</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{color: 'hotpink', fontSize: 50}}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>

        <Text style={{color: 'white', marginTop: '6%'}}>Dana's Photos</Text>
        <Container photos={this.state.photos}/>
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
  },
});

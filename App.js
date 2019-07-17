import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Slider } from 'react-native';
import Container from './components/Container'

export default class App extends Component {

  state = {
    photos: null,
    modalVisible: false,
    color: 'hotpink'
  }

  componentDidMount() {
    this.setState({photos: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80', 'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80', 'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80', 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80']})
  }

  handleColorChange = () => {
    console.log('change');
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'aliceblue', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'honeydew', 'indianred', 'hotpink', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lime', 'linen', 'magenta', 'maroon', 'mintcream', 'midnightblue', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'papayawhip', 'peachpuff', 'peru', 'pink', 'powderblue', 'plum', 'rebeccapurple', 'rosybrown', 'saddlebrown', 'skyblue', 'springgreen', 'steelblue', 'teal', 'thistle', 'tomato', 'turquoise']
    console.log(colors.length);
    let number = Math.floor(Math.random() * 102)
    console.log(number);
    let pickedColor = colors[number]
    console.log(pickedColor);
    this.setState({color: pickedColor})

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{width: 200, height: 40, marginTop: 20}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onSlidingComplete={this.handleColorChange}
          />
        <View style={{marginTop: 30}}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
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

        <Text style={{color: 'white', marginTop: '6%'}}>Dana's React App</Text>
        <Container photos={this.state.photos} color={this.state.color}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

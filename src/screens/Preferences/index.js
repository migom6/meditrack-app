import React, {Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'
import Titlebar from './../Titlebar'

export default class Prefences extends Component {
  
  _handlePress = () => {
    Linking.openURL("http://github.com/migom6");
    this.props.onPress && this.props.onPress();
  };
  
  render() {
    return (
      <View>
        <Titlebar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});


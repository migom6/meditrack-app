import React, {Component} from 'react';
import {Button, View, StyleSheet, Text, Linking } from 'react-native'

export default class Screen2 extends Component {

    _handlePress = () => {
        Linking.openURL("http://github.com/migom6");
        this.props.onPress && this.props.onPress();
    };
    
    render() {
      return (
        <View>  
            <Text> made with react-native </Text>
            <Text onPress = {this._handlePress}> By migom6</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    
  });


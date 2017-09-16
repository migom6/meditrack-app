import React, {Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'
import Titlebar from './../Titlebar'

export default class Connect extends Component {
    render() {
      return (
        <View style = {styles.container}>
            <Titlebar/>  
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });


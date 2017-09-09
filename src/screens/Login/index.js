import React, {Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'
import Titlebar from './../Titlebar'

export default class Login extends Component {
    constructor(props){
        super(props)
    }
    _onLogin = () => {
        this.props._onLogin()
    }
   render() {
    return (
      <View>
        <Titlebar/>
        <Button title="Login" onPress = {this._onLogin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
  
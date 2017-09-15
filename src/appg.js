import React , {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Image ,Text} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { Navigator } from './screens/Navigator'
import Login from './screens/Login' 

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    auth: false,
  };

  _onLogin = () => {
    this.setState({
      auth : true
    })
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    // else if(!auth){
    //     return (
    //         <Login/> 
    //       );
    // } 
    else {
      return (
          <Navigator/>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/pill/1.png'),
        require('./assets/pill/2.png'),
        require('./assets/pill/3.png'),
        require('./assets/pill/4.png'),
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'gotham-rounded-book': require('./assets/fonts/Gotham-Rounded-Book.otf') },
        { 'gotham-rounded-bold': require('./assets/fonts/Gotham-Rounded-Bold.otf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

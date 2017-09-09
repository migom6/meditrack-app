import React , {Component} from 'react';
import { View } from 'react-native'
import { Navigator } from './screens/Navigator'
import Login from './screens/Login' 

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      auth: false
    }
  }

  _onLogin = () => {
    this.setState({
      auth : true
    })
  }
  
  render() {
    if(!this.state.loading && this.state.auth){
      return (
        <Navigator/>  
      );
    }
    if(!this.state.loading && !this.state.auth){
      return (
        <Login _onLogin = {this._onLogin} />  
      );
    }
    
  }
}

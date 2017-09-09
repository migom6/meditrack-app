import { Header } from 'react-native-elements';
import React,{ Component } from 'react';
export default class Titlebar extends Component {
  render(){
    return(
      <Header  
      centerComponent={{ text: 'Meditrack', style: { color: '#000' } }} 
      />
    )
  }
}
import { Header } from 'react-native-elements';
import React,{ Component } from 'react';
export default class Titlebar extends Component {
  render(){
    return(
      <Header  
      centerComponent={{ text: 'Meditrack', style: { color: '#fff' } }} 
      backgroundColor = {'skyblue'}
      />
    )
  }
}
//header height 70 padding 15
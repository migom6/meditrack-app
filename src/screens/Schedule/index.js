import React, {Component} from 'react';
import {Button, View} from 'react-native';
import Titlebar from './../Titlebar'

export default class Schedule extends Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View> 
                <Titlebar/>
            </View>
        );
    }
}
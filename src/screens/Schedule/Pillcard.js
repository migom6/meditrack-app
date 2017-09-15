import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button, StyleSheet, Image } from 'react-native';

export default class Pillcard extends Component{
    render(){
        source = {}
        switch(this.props.medtype){
            case 1: source = require('./../../assets/pills/1.png') 
                    break;
            case 2: source = require('./../../assets/pills/1.png')
                    break;
            case 3: source = require('./../../assets/pills/1.png')
                    break;
            case 4: source = require('./../../assets/pills/1.png')
                    break;
        }
        return(
            <View>
                <Image source={source}/>
                <Text>{this.props.}</Text>
            </View>
        )
    }
}
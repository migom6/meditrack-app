import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import ActionButton from 'react-native-action-button';


import Titlebar from './../Titlebar'
import Panel1 from './Panel1' 
import Panel2 from './Panel2' 
import Panel3 from './Panel3' 
// import Panel4 from './Panel4' 
// import Panel5 from './Panel5' 

export default class Schedule extends Component {  
    constructor(props){
        super(props)
    } 
    render() {
        return (
            <View style = {styles.container}> 
                <Titlebar/>
                <Panel1/>  
                <Panel2/>
                <Panel3/> 
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => { console.log("hi")}}
                />            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70
    }
})
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Panel1 extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
        };
    }  
    
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
    
    render () {
        return (
            <View>
                <Button
                onPress={()=>{
                    console.log("edit")
                }}
                title="Add new"
                color="#841584"
                accessibilityLabel="Add new"
                />
                <Button
                onPress={this._showDateTimePicker}
                title="Date"
                color="#841584"
                accessibilityLabel="date picker"
                />
                <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                />
            
            </View>
        );
    }
    
}


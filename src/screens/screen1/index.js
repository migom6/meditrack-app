import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class Screen1 extends Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View> 
                <Button
                title="Go to Screen2"
                onPress={() => navigate('Screen2')}
                />
            </View>
        );
    }
}
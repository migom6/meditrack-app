import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {Divider} from 'react-native-elements'


export default class Panel3 extends Component {
    state = {
        orders:[]
        
    }
    
    resJson(res) {
        return JSON.parse(res._bodyInit)
    }
    
    async componentDidMount() {
        const res = await fetch('https://meditrack-api.herokuapp.com/api/user/59b4c55d0f4a460004f38e20/orders/night')
        this.setState({
            orders: this.resJson(res)
        })
    }
    
    getImage = (type) => {
        let path = {};
        try {
            if (type == 'capsule')
                path = require('./../../assets/pill/1.png')
            else if (type == 'syrup')
                path = require('./../../assets/pill/2.png')
            else if (type == 'injection'){
                path = require('./../../assets/pill/3.png')                
            }
            else if (type == 'tablet'){
                path = require('./../../assets/pill/4.png')                
            }
        }
        catch (e){
            
        }
        
        return <Image resizeMode='contain' style={{width: 30, height: 30}} source={path} />
    }
    
    alertItemName = (item) => {
        alert(item.medicine.name)
        this.setState({orders: this.state.orders.filter(function(orders) { 
            return orders !== item 
        })})
        
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{paddingBottom: 10, color: "#757575"}} >NIGHT</Text>
                <Divider style={{ backgroundColor: '#DDD' }} />
                <View style = {styles.row}>
                {
                    this.state.orders.map((item, index) => (
                        <TouchableOpacity
                        key={item._id}
                        style={styles.medipill}
                        onPress={() => this.alertItemName(item)}>
                        
                        <View style={styles.text}>
                        {this.getImage(item.medicine.type)}
                        <Text>{item.medicine.name}</Text>
                        </View>
                        </TouchableOpacity>
                    ))
                }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff',
        flex: 1,
        marginBottom: 24,
        marginRight: 16,
        marginLeft: 16
    },
    row: {
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        flex: 1,
        marginTop: 12.5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class Panel2 extends Component {
    state = {
        orders:[]
        
    }
    
    resJson(res) {
        return JSON.parse(res._bodyInit)
    }
    
    async componentDidMount() {
        const res = await fetch('https://meditrack-api.herokuapp.com/api/user/59b4c55d0f4a460004f38e20/orders/noon')
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
        
        return <Image
        source={path}
        />
    }
    
    alertItemName = (item) => {
        alert(item.medicine.name)
        this.setState({orders: this.state.orders.filter(function(orders) { 
            return orders !== item 
        })})
        
    }
    render() {
        return (
            <View
            style={styles.container}>
                <Text>Noon</Text>
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
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    
    medipill: {
        padding: 10
    }
})

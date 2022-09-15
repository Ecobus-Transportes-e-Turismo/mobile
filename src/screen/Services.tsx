import { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { GlobalStyle, ServiceStyles } from '../styles';

import Button from '../components/Button'
import Loadding from '../components/loadding';
import { useVehicles } from '../context/VehiclesContext';



const Services:React.FC = () => {

    return (
        <SafeAreaView style={ GlobalStyle.container} >
            <View style={{flex:1}}>
                <Text style={ GlobalStyle.title}> services</Text>
                <View style={ ServiceStyles.buttons}>
                    <Button key={'addService'} text='' iconName='plus' onPress={ async () => {
                        
                    } } />
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Services;

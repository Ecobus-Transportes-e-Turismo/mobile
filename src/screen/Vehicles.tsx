import { View, Text, SafeAreaView } from 'react-native';
import { GlobalStyle, ServiceStyles } from '../styles';
import Button from '../components/Button'
import { useVehicles } from '../context/VehiclesContext';



const Vehicles:React.FC = () => {
    
    const { vehicles, placas } = useVehicles();

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

export default Vehicles;

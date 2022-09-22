import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../context/AuthContext';
import { GlobalStyle } from '../styles'
import { Services } from '../types';
import CardService from '../components/Cards/service';
import { api } from '../services/axios';


const DashBoard:React.FC = () => {
    const { user } = useAuth();
    const [ servicos, setServicos ] = useState<Services[] | null>();

    useEffect (()=>{
        api.get("/Vehicles/").then(({request, data, headers, config})=>{
            console.log(data, request);
        })
    }, []);

    return (
        <View style={GlobalStyle.container}>
            <ScrollView>
                {servicos == null ? <Text>Não serviços</Text> : 
                    servicos?.map((item, i) => (
                        <CardService i={i} service={item} onPress={async ()=>{}}/> 
                    )
                )}
            </ScrollView>
        </View>
    )
}

export default DashBoard;
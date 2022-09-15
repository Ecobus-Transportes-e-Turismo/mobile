import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import Minuta from '../screen/Minuta'
import DrawerMenu from '../components/DrawerMenu'


const Drawer = createDrawerNavigator();

const DriveRoutes:React.FC = () =>{
  return(
    <Drawer.Navigator 
      drawerContent={ props => <DrawerMenu {...props}/>} 
      screenOptions={{
        headerShown:false,
        drawerActiveBackgroundColor:"rgba(30, 60, 36,.1)",
        drawerInactiveTintColor:"#000",
        drawerActiveTintColor:"#000",
        drawerLabelStyle:{
          marginLeft:-20,
          fontSize:16,
          fontFamily:'Roboto'
        }

    }}>
        <Drawer.Screen name="Minuta" component={Minuta} options={{
            drawerIcon:()=> (
                <FontAwesome5 name='scroll' size={20} color='#000'/>
            )
        }}/>
    </Drawer.Navigator>
  )
  
}
export default DriveRoutes;
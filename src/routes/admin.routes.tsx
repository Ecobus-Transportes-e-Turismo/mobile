import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import DashBoard from '../screen/DashBoard';
import DrawerMenu from '../components/DrawerMenu';
import Services from '../screen/Services'


const Drawer = createDrawerNavigator();

const AdminRoutes:React.FC = () =>{
  return(
    <Drawer.Navigator 
      drawerContent={ props => <DrawerMenu {...props}/>}
      screenOptions={{
        headerShown:true,
        drawerActiveBackgroundColor:"rgba(30, 60, 36,.1)",
        drawerInactiveTintColor:"#333",
        drawerActiveTintColor:"#000",
        drawerLabelStyle:{
          marginLeft:-20,
          fontSize:16,
          fontFamily:'Roboto'
        }
    }}>
        <Drawer.Screen name="DashBoard" component={DashBoard} options={{
            drawerIcon:()=> (
                <FontAwesome5 name='scroll' size={20} color='#000'/>
            ),
        }}/>
        <Drawer.Screen name="Services" component={Services} options={{
            drawerIcon:()=> (
                <FontAwesome5 name='scroll' size={20} color='#000'/>
            )
        }}/>
        
    </Drawer.Navigator>
  )
  
}
export default AdminRoutes;
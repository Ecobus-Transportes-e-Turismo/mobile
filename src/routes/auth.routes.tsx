import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screen/Login';
import Register from '../screen/Register';

const AuthStack = createStackNavigator();

const AuthRoutes:React.FC = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name='login' component={Login}  options={{ title: '' }}/>
            <AuthStack.Screen name='Register' component={Register}  options={{ title: 'Solicitar cadastro.' }}/>
        </AuthStack.Navigator>
    )
}
export default AuthRoutes;
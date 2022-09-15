import { View, Image } from 'react-native';
import { GlobalStyle, LoginStyle } from '../styles';

import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

type props = {}

const Login:React.FC<props> = () => {
    const { singIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSingin = async () => {
        await singIn({email, password});
    }

    return (
        <View style={GlobalStyle.container}>
            <Image  source={require('../../assets/logoEcobus.jpg')} resizeMode='contain' style={LoginStyle.logo}/>
            <View>
                <Input icon='user' type='email-address' placeholder='E-mail:' value={email} setValue={setEmail} disable={false}/>
                <Input icon='key' type='default' placeholder='Password:' value={password} setValue={setpassword} disable={false} secureTextEntry ={ true }/>
            </View>
            <Button text='Logar' onPress={handleSingin} iconName={'arrow-alt-circle-right'}/>
        </View>
    )
}

export default Login;
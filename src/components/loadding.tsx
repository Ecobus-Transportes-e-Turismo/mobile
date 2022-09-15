import { View, Text } from 'react-native';
import { GlobalStyle } from '../styles'

const Loadding:React.FC = () => {
    return (
        <View style={GlobalStyle.conatinar}>
            <Text style={GlobalStyle.title}> Loadding...</Text>
        </View>
    )
}

export default Loadding;
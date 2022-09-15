import { Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { ButtonCustomStyle } from '../styles'

type props = {
    text:string,
    iconName?:string,
    onPress():Promise<void>
}

const ButtonCustom:React.FC<props> = ({text, onPress, iconName}) => {
    return (
        <Pressable onPress = { onPress }  style={ ButtonCustomStyle.button }>
            <Text style={ ButtonCustomStyle.text }> { text } </Text>
            <FontAwesome5 name={ iconName } size = { 18 } color = '#FFF'/>
        </Pressable>
    )
}

export default ButtonCustom;
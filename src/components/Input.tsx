import { View, TextInput,  KeyboardType} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { InputCustomStyle } from '../styles'
import { Dispatch, SetStateAction } from 'react';


type Input = {
    icon?:string,
    type:KeyboardType,
    placeholder:string,
    value:string,
    setValue:any
    secureTextEntry?:boolean
    disable?:boolean
}

const InputCustom = ({placeholder, value, setValue, secureTextEntry, icon, type, disable}:Input) => {
    return (
        <View style={InputCustomStyle.container}>
            <FontAwesome5 name={icon} size={18} color='#000' style={InputCustomStyle.icon}/>
            <TextInput
                keyboardType = { type }
                style={InputCustomStyle.input}
                placeholder={placeholder}
                value={value}
                onChangeText={ setValue }
                secureTextEntry={secureTextEntry}
                disableFullscreenUI = { disable }
            />
        </View>
    );
}

export default InputCustom;
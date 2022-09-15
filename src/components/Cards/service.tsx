import type { Services } from "../../types";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { cardGlobal, cardService } from '../../styles'



type CardService = {
    service:Services,
    i:number,
    onPress():Promise<void>,
}

const CardService:React.FC<CardService> = ({service, i, onPress}) => {
    return (
        <Pressable style={ cardGlobal.card }>
            <View style = {cardGlobal.boxLine}>
                <Text> { service.data.toString() } </Text>
                <Text> { service.corporate } </Text>
            </View>
            <View style = {cardGlobal.boxLine}>
                {/* Address */}
            </View>
            <View style = {cardGlobal.boxLine}>
                <Text> { service.value } </Text>
                <Text> { service.vehicleId } </Text>
            </View>
        </Pressable>
    );
}

export default CardService;
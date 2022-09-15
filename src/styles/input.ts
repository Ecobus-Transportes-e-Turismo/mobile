import { StyleSheet } from 'react-native';


export const InputCustomStyle = StyleSheet.create ({
    container:{
        flexDirection:'row',
        width:'100%',
        height:45,
        borderWidth:1,
        borderColor:'rgba(0,0,0,.5)',
        borderRadius:8,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },

    input:{
        width:'90%',
        height:'100%',
        paddingLeft:10,
    }
})
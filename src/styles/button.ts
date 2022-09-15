import { StyleSheet } from 'react-native';

export const ButtonCustomStyle = StyleSheet.create({
    button:{
        flexDirection:'row',
        marginTop:20,
        padding:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#000',
        borderRadius:10,
        height:45,
    },

    text:{
        fontWeight:'bold',
        color:'#fff',
        textTransform:'uppercase',
        textAlign:'center'
    }
})
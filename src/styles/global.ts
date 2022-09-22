import { StyleSheet } from 'react-native';


export const GlobalStyle = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#FFF',
    },

    title: {
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'normal',
        textTransform:'capitalize',
        margin:10,
        textAlign:'center',
        padding:10,
        borderBottomColor:'#000',
        borderBottomWidth:1,
        shadowColor:'#000',
        width:'100%'
    },

    link:{},
})
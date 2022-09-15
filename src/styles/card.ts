import { StyleSheet } from 'react-native';


export const cardGlobal = StyleSheet.create({
    card:{
        flex:1,
        minWidth:'100%',
        flexDirection:'column',
        padding:10,
        justifyContent:'center',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
    },
    boxLine:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom:5,
    }
});

export const cardService = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'900'
    },

    data:{ 
        fontSize:14,
        fontWeight:'700'
    },

    descritivo:{
        fontSize:14,
        fontWeight:'400',
    }, 

    icon:{
        justifyContent:'center', 
        alignItems:'center', 
        width:50,
        // borderColor:Theme.colors.greenDark,
        // borderLeftWidth:1,
    }
});
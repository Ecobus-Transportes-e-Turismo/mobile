import { StyleSheet } from 'react-native'


export const DrawerStyle = StyleSheet.create({
    container:{
        flex:1, 
        padding:10, 
        width:'100%'
    },

    colum:{
        flexDirection:'column', 
        flexWrap:'wrap'
    },
    
    line: {
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems:'center'
    },

    lineCenter:{
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems:'center', 
        paddingBottom:10, 
        justifyContent:'center'
    },

    content:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'#000',
        marginBottom:20,
    },

    avatar:{
        height:80,
        width:80,
        borderRadius:50
    },

    name:{
        paddingLeft:5,
        fontSize:18,
        fontWeight:'800',
    },

    footer:{
        borderTopWidth:2,
        marginBottom:10,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    
    office:{
        paddingLeft:5
    }
});
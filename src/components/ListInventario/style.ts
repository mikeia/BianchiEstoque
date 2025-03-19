import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        //borderBottomStartRadius:6,
        //borderBottomEndRadius:6,
        padding: 8,
        height:260,
        backgroundColor: '#fff', 
    },
    ContainerSecondary:{
        backgroundColor:'#fff',
        marginTop:0,
        height:280,
        borderRadius:6
    },
    ItemContainer: {
        marginBottom: 1, 
        padding: 0,
        backgroundColor: '#ffffff',
       
        flexDirection:'row',
        justifyContent:'space-between',
        

    },
    ItemContainerSecondary:{
       
        padding: 1,
        backgroundColor: '#fffff',
        //borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    Text: {
        fontSize: 16, 
        color: '#333', 
        textAlign:'justify'
    },
    ItemSecondaryContainer:{
        marginBottom: 15, 
        padding: 6,
        backgroundColor: 'blue',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    inputsHeader:{        
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#878585',
        padding:6,
        marginTop:10
    },
    inputsHeaderQtde:{
        justifyContent:'center',
        alignItems:'center',
        
        flexDirection:'row',
        padding:2,
    },
    inputsHeaderItem:{
        padding:2,
        flex:1,
        justifyContent:'center',
        alignItems:'center',  
        flexDirection:'row'
    },
    qtdItem:{
        backgroundColor:'#ffff',
        color:'#000',        
        height:38,
        width:82,
        borderRadius:6,
        padding:6,
        fontSize:18,
        fontWeight:'bold',
        alignContent:'center',
        alignItems:'center'
        
    },
    codItem:{
        backgroundColor:'#ffffff',
        height:38,
        flex:1,
        borderRadius:6,
        color:'#000', 
        fontSize:18,
        fontWeight:'bold',
        paddingStart:4
    },
});

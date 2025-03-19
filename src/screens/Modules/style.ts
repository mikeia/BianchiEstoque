import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,  
        alignItems: 'center',
        alignContent: 'center',
        paddingTop:40
    },
    textHeader:{
        color:'#FFF', 
        fontSize:28, 
        alignItems:'center', 
        justifyContent:'center'
    },
    btnLogout: {
        backgroundColor:'white',
        marginBottom:0,
        height:70,
        width:70,
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 40,
        position: 'absolute',       
    },
    textLogout :{
        color:"black",
        fontSize:18,
       
    },
    btSair: {    
        position: 'absolute',
        bottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginLeft: 10,    
    },
})
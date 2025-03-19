import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'#000',
        
    },
    logo :{       
        width:128, 
        height:128,        
        resizeMode:'contain',
        borderRadius:40,
        
    },
    header: {        
        marginBottom:6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerModalDetalhe: {
        width: '100%',
        borderColor: '#878585',
        marginTop: 8,
        border: 8
    },
    modalDetalhes: {
        backgroundColor: "#1E6F9F",
        margin: 10,
        marginTop: 60,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 6,
        padding: 10,
        height:450
    },
    textTituloModal: {
        color: '#fff',
        fontSize: 24,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        marginTop:5,
        
        
    },
    inputItemModal: {
        backgroundColor: '#F5DD72',
        fontSize: 42,
        padding: 12,
        width: '100%',
        height: 70,
        color: '#000',
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',       
        textAlign: 'center',
        borderRadius: 6,
        marginBottom: 22,
        marginTop: 10,
        borderColor:'#fff',
        borderStyle:'solid',
        borderWidth:2
    },
    listItem: {        
        padding: 2,        
        marginBottom:4,
        borderRadius: 6,
    },
    toHeader: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 40,
    },
    doHeader: {
        color: '#F60703',
        fontWeight: 'bold',
        fontSize: 40,
    },
    containerLogo : {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    container: {
        //flex:2,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginTop:50,
        
        
    },
    input :{
        backgroundColor:'#fff',
        width:'90%',
        color:'#222',
        fontSize:47,
        borderRadius:7,
        padding:10,
        textTransform:'uppercase'
    },
    btnSubmit :{
       backgroundColor:'#1E6F9F',
       width:'90%',
       height:90,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:7,
       marginTop:20       
    },
    textSubmit :{
        color:'#fff',
        fontSize:38,        
    },
})
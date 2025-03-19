import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: '100%',
        padding: 10,
        flex: 1,
        backgroundColor:'#000000'
    },

    inputItem: {
        backgroundColor: '#dcdcdc',
        fontSize: 18,
        color: '#000',
        height:48,
        borderRadius: 6,
        borderColor:'#c2c2c2',
        borderWidth:2
    },
    btSair: {    
        //position: 'absolute',        
        alignItems: 'center',
        width: '100%',
        
    },

    filtroDias:{
        color:'#323232',
        fontSize:20,
        marginBottom:10
    },
    filtroPorVendaAnt:{
        height:200       
    },
    filtroPorProduto:{
        height:200,
    },
    filtroItensReposicao:{
        height:100 
    },
    filtroNotaEntrada:{
        height:200 
    },
    filtroItensEspecificos:{
        height:200,
        justifyContent:'center',
        alignItems:'center',
       
    },
    filtroItensNnInventariado:{
        height:200,
    },
    btnImporta:{                
        flexDirection:'row',
        width:200,        
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        
        backgroundColor:'#000',
        alignContent:'center',
        height:50,
        textAlign:'center'  
    },
    Label:{
        color:'#323232',
        fontSize:16,
        marginTop:10
    },
    textImport:{
        fontSize:24,
        color:'#ffffff'
    },

    header: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        gap:12

    },    
    iconBack:{
        width:60
    },
    doHeader: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 36,
        flex:1,
        alignItems:'center',
        alignContent:'center',
      
    },
    btnLogout: {
        backgroundColor:'#c1c1c1',
        marginTop:10,
        height:40,
        width:'100%',
        borderRadius:6, 
        justifyContent:'center',
        alignItems:'center'        
    },
    textLogout :{
        color:"black",
        fontSize:18,
        
    },
    containerModalDetalhe: {
        width: '100%',
        borderColor: '#878585',
        marginTop: 4,
        border: 8, 
        
    },
    modalDetalhesPrimary: {
        backgroundColor: "#dfdfdf",
        marginTop: 40,
        height:400,
        width:300,
        borderRadius: 8,
        padding: 8,
        marginLeft:100
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    pickText:{
        width:'100%',        
        padding:0,
        color:'#000000',
        fontWeight:'bold',
        backgroundColor:'#c9c9c9',
        margin:0,
        
    },
    btnConfirmar:{
        backgroundColor:'blue',
        width:'100%',
        height:48,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    textHeader:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#c2c2c2',
        padding:3,
        marginTop:2,
        alignItems:'center',
        
    },


})
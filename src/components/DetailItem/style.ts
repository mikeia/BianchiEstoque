import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom:100

    },
    switchh: {
        flex: 1,
        marginTop:60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItem: {                        
        borderRadius: 16,
        marginTop:2,
        width:'100%',        
    },
    textTituloItem: {
        color: '#F5DD00',
        fontSize: 24,
        width: 235,
        marginRight: 8,
        maxWidth: 235,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    textTituloItemModal:{
        color: 'yellow',
        fontSize: 18,
        width: 235,
        marginRight: 8,
        maxWidth: 235,
        marginBottom: 14,
        fontWeight: 'bold'  
    },
    textItem: {
        color: '#FFFF',
        fontSize: 22,
        width: 235,
        marginRight: 8,
        maxWidth: 235,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    textItemDestak:{
        color: '#FFFF',
        fontSize: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign:'center',
        maxWidth: '100%',
    },
    textItemConfirm: {
        color: 'yellow',
        fontSize: 34,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textTituloModal: {
        color: '#44F555',
        fontSize: 28,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2,                
    },
    textTituloModalSelectItem: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
                 
    },
    textTituloModalQtde: {
        color: '#44F555',
        fontSize: 12,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,                
    },
    textTituloModalConfirm: {
        color: '#FFFFFF',
        fontSize: 34,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 15
    },
    textTituloItemConfirm: {
        color: '#FFFFFF',
        fontSize: 34,
        marginRight: 8,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    headerDetail:{
        width:'100%',        
        marginTop:8
    },
    version:{
        fontSize:10,
        alignItems:'center',
        color:'#c9c9c9',
    },
    textInputItem:{
        borderRadius:4,
        borderColor:'yellow',
        backgroundColor:'#FFFFFF',
        height:100,
        alignItems:'center',
        textAlign:'center',
        marginBottom:2,
        marginTop:30,
        fontSize:30,
        fontWeight:'bold',
        color:'red',
        borderWidth:4,              
    },
    textClean :{
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold',
    },
    btnClean:{
        padding:4,
        alignContent:'center',
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'#1E6F9F',
        width:60,
        height:60,
      
        
    },
    inputItemModal: {
        backgroundColor: '#fff',
        fontSize: 32,
        padding: 12,
        width: '100%',
        height: 70,
        color: '#000',
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 6,
        marginBottom: 22,
        marginTop: 10
    },
    inputItemModalPrateleira: {
        backgroundColor: '#fff',
        fontSize: 32,
        padding: 10,
        maxWidth: '100%',
        height: 60,
        color: '#000',
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 4,
        marginBottom: 12,
        marginTop: 3

    },
        infoUserEmp: {    
        //textAlign:'center',
        //alignContent: 'center',
        //justifyContent: 'center',
        //alignItems: 'center',
        width: '100%',
        //marginLeft: 10,  
        fontWeight:'900'  
    },
      textUserEmp: {
        color: 'gray',
        fontSize: 15,
        //alignContent: 'center',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    modalDetalhes: {
        backgroundColor: "#1E6F9F",
        margin: 4,
        marginTop: 4,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,
        height:550
    },
    modalConfirmLocalizador: {
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 6,
        padding: 4,
        height:600
    },
    modalSelectItem: {
        backgroundColor: "#1E6F9F",
        width:  '100%',
        marginTop: 40,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,
        height:400
    },
    flatList:{
        marginTop:10,
        maxHeight:200,
        marginBottom:10,
        maxWidth:'100%',
       
    },
    flatListItem:{
        backgroundColor:"#1E6F9F",
        fontSize:24,
        padding:12,
        color:'#F5DD00'
    },
    modalDetalhesPrimary: {
        backgroundColor: "#00B029",
        margin: 10,
        height:500,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 8,
        padding: 20
    },
    modalDetalhesSecond: {
        backgroundColor: "#FA292F",
        margin: 10,     
        height:500,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 8,
        padding: 20
    },
    containerModalDetalhe: {
        width: '100%',
        borderColor: '#878585',
        marginTop: 4,
        //borderWidth: 1,        
    },
    containerModalSelectItem: {
          width:'100%',
          padding:4
    },
})
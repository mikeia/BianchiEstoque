import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: '100%',
        padding: 10,
        flex: 1
    },

    inputItem: {
        backgroundColor: '#F5DD72',
        fontSize: 42,
        padding: 12,
        height: 70,
        color: '#000',
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 6,
        marginBottom: 22,
        marginTop: 20

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
    infoUserEmp: {    
        textAlign:'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginLeft: 10,  
        fontWeight:'900'  
    },
    textUserEmp: {
        color: 'gray',
        fontSize: 15,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    img: {
        width: 19,
        height: 31,
        marginRight: 8
    },
    toHeader: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 36,

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
    estilo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lightgrey",
    },

    containerModal: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    //modalDetalhes
    listItem: {
        padding: 8,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    textTituloItem: {
        color: '#1E6F9F',
        fontSize: 24,
        marginRight: 8,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4
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
    textTituloModal: {
        color: '#000',
        fontSize: 24,
        maxWidth: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        marginTop:5
        
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
    textItem: {
        color: '#FF4747',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textItemConfirm: {
        color: '#FFF',
        fontSize: 34,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

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
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 6,
        marginBottom: 22,
        marginTop: 10

    },
    modalDetalhes: {
        backgroundColor: "#FFF",
        margin: 10,
        marginTop: 10,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderRadius: 8,
        padding: 10,
        height:400
    },
    modalDetalhesPrimary: {
        backgroundColor: "#00B029",
        margin: 10,
        marginTop: 60,
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
        marginTop: 60,
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
        marginTop: 8,
        border: 8
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
       
    }

})
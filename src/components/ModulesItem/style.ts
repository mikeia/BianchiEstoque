import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        //marginTop:10,
        width: '100%',
        padding: 10,
        height: 60,
        //flex: 1,
        marginBottom:60
        
    },

    btnPrimary:{
        width:'100%',
        height:100,
        padding:10, 
        backgroundColor:'#4EA8DE',
        borderRadius:4,
        alignContent:'center',
        justifyContent:'center'       
    },
    textBtnPrimary:{
        color:'#FFF',
        fontSize:32,

    },

    btnSecondary:{
        width:'100%',
        height:100,
        padding:10,        
        backgroundColor:'#F60703',
        borderRadius:4,
        alignContent:'center',
        justifyContent:'center'   
    },
    textBtnSecondary:{
        color:'#FFF',
        fontSize:32,
    }
})
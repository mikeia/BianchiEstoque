import {
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    BackHandler,
    Alert,
    Modal,
  } from "react-native";
  import { Feather } from "@expo/vector-icons";
  import { FontAwesome } from '@expo/vector-icons';
  import { EvilIcons } from '@expo/vector-icons';
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Picker } from '@react-native-picker/picker';
  import { styles } from "./style";
  import { ListInventario} from '../../components/ListInventario'
import { ButtonConfirm } from "../ButtonConfirm";
  
  export function Inventario() {
    const navigation = useNavigation();
    const [modal, setModal] = useState<"filter" | "">("");
    const [selectedFilter, setSelectedFilter] = useState("diasSemInventario");
  
    //Função do botão Sair
    const handleBackButton = () => {
      Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
      ]);
      return true;
    };
  
    //function para navegar para a tela de módulos
    const backModules = (module) => {
      navigation.navigate(module);
    };
  
    const openModal = () => {
      setModal("filter");
    };
  
    const handleCloseModal = () => {
        setModal("");
    };
  
    //useEffect para evitar que o usuario vá para a tela de login clicando no botão voltar do dispositivo,
    //assim para ir para a tela de login usa apenas o botão SAIR do aplicativo
    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButton
      );
  
      return () => backHandler.remove();
    }, []);
  
    const renderFilterFields = () => {
      switch (selectedFilter) {
        case "vendaAnterior":
          return (          
            <View style={styles.filtroPorVendaAnt}>
              <Text style={styles.Label}> Sem invent. com mais de</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 10 dias" />
              <Text style={styles.Label}> Saldo máximo de peças:</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 100"/>              
            </View>                      
          );
        case "saldoDepositoSemInventario":
          return (
            <View style={styles.filtroPorProduto}>
              <Text style={styles.Label} > Código do Deposito</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 2"/>              
            </View>
          );
        case "itensReposicao" :
          return(
            <View style={styles.filtroItensReposicao}>        
              <Text style={styles.Label}> Itens com reposição no dia anterior</Text>
            </View>    
          );
        case "notasEntrada" :
          return(
            <View style={styles.filtroNotaEntrada}>        
              <Text style={styles.Label}> Número da nota</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 1368985" />
              <Text style={styles.Label}> Nr. Conferencia:</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 53100"/>  
            </View>    
          );    
        case "itensEspecificos":
          return (
            <View style={styles.filtroItensEspecificos}>
              <TouchableOpacity style={styles.btnImporta}>
                <Text style={styles.textImport}>Importar</Text>
                <FontAwesome name="plus-circle" size={28} color="white" />
              </TouchableOpacity>              
            </View>
          );
        case "itensNaoInventariado":
          return (           
            <View style={styles.filtroItensNnInventariado}>
              <Text style={styles.Label} > Itens não inventariados a mais de:</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 60 dias"/>              
            </View>                        
          );  
        case "itensTransfGrupo":
          return (           
            <View style={styles.filtroItensNnInventariado}>
              <Text style={styles.Label}> Sem invent. com mais de</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 10 dias" />
              <Text style={styles.Label}> Saldo máximo de peças:</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 100"/>            
            </View>                        
          ); 
        case "itensPedFaturados":
          return (           
            <View style={styles.filtroItensNnInventariado}>
              <Text style={styles.Label} > Número do Pedido:</Text>
              <TextInput style={styles.inputItem} placeholder=" Ex.: 1168952"/>              
            </View>                        
          );                       
        default:
          return null;
      }
    };
  
    return (
      <View style={styles.container}>
        <StatusBar />
        {/*Cabeçalho do app Bianchi Estoque*/}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => backModules("Modules")}
          >
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
  
          <Text style={styles.doHeader}>INVENTÁRIO</Text>
          <TouchableOpacity style={styles.iconBack} onPress={openModal}>
            <Feather name="filter" size={30} color="#c1c1c1" />
          </TouchableOpacity>
        </View>
  
        {/*Detalhes do item scaneado na tela principal*/}
        
        
  
        <View style={styles.containerModalDetalhe}>
          <Modal
            visible={modal === "filter"}
            transparent={true}
            animationType="fade"
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalDetalhesPrimary}>
                <View style={styles.modalHeader}>
                <Text style={styles.filtroDias}>Filtros:</Text>
                
                <TouchableOpacity onPress={handleCloseModal}>
                    <EvilIcons name="close" size={30} color="black" />
                </TouchableOpacity>
                </View>
              <Picker
                selectedValue={selectedFilter}
                style={styles.pickText}
                onValueChange={(itemValue, itemIndex) => setSelectedFilter(itemValue)}                
              >
                <Picker.Item label="Vendas do dia Anterior" value="vendaAnterior" />
                <Picker.Item  label="Saldo Dep. Exceto Dep 2" value="saldoDepositoSemInventario" />                
                <Picker.Item label="Itens Reposição" value="itensReposicao" />
                <Picker.Item label="Nota Entrada" value="notasEntrada" />
                <Picker.Item label="Itens Especificos" value="itensEspecificos" />
                <Picker.Item label="Não inventariado" value="itensNaoInventariado" />
                <Picker.Item label="Transferencia Grupo" value="itensTransfGrupo" />
                <Picker.Item label="Pedido Faturados" value="itensPedFaturados" />
              </Picker>
              {renderFilterFields()}

              <TouchableOpacity style={styles.btnConfirmar}>
                <Text style={styles.btnText}>Confirmar</Text>
              </TouchableOpacity>

              <View style={styles.btSair}>
                <TouchableOpacity style={styles.btnLogout} onPress={handleBackButton}>
                  <Text style={styles.textLogout}>SAIR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.textHeader}>                      
            <Text style={{color:'#000'}}>Cod.</Text>
            <Text style={{color:'#000', width:122}}>Localizador</Text>
            <Text style={{color:'#000'}}>Qtde</Text>
          </View>
          <ListInventario/>
          
          <View>
          <TouchableOpacity style={{backgroundColor:'#1E6F9F', marginTop:10, height:58, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontSize:24}}>Confirmar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
  
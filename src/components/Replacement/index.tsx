import {  View,  Text,  StatusBar,  TouchableOpacity,  BackHandler,  Alert,  TextInput,  Modal,FlatList,Switch} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect ,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { ButtonScaner } from '../ButtonScaner';
import { ButtonCancel } from '../ButtonCancel';
import api from "../../services/api";
import { isCancel } from 'axios';

import { DetailItem } from "../DetailItem";

export function Reposicao({ route,paramKey,cdempresa,cd_usuario,repositor,}) {

  const navigation = useNavigation();
  const [ cd_empresa, setCdEmpresa ] = useState('');
  const [cdItemEndereco, setCdItemEndereco] = useState('');
  const [cdManLocalizador, setCdManLocalizador] = useState('');

  const [modalManLocal, setModalManLocal] = useState<boolean>(false)  
 
  const [isFixarLocalizador, setIsFixarLocalizador] = useState(false); 
  const toggleSwitchLocalizador = () => setIsFixarLocalizador(previousState => !previousState);
  type ItemEndereco = {
    id: string;
    item: string;
    endereco: string;
  };

  const [itensEndereco, setItensEndereco] = useState<ItemEndereco[]>([]);

  const [corSelecionada, setCorSelecionada] = useState<string | null>(null);
  const [areaSelecionada, setAreaSelecionada] = useState<string | null>(null);
  
  //list de itens do cores
const cores = [
  { id: 'VERMELHO', nome: 'Vermelho', valor: '#FF0000' },//10
  { id: 'VERDE', nome: 'Verde', valor: '#00FF00' },   //11
  { id: 'AZUL', nome: 'Azul', valor: '#36a4ee' },    //12
  { id: 'AMARELO', nome: 'Amarelo', valor: '#FFFF00' },  //13
  { id: 'LARANJA', nome: 'Laranja', valor: '#e7643c' },  //14
  { id: 'BRANCO', nome: 'Branco', valor: '#ffffff' },   //15
];

const area = [
  { id: 'PISO-1', nome: 'Piso-1', valor: '#ffffff' }, //20
  { id: 'TERREO', nome: 'Terreo', valor: '#ffffff' }, //21
  { id: 'PT.PALLET', nome: 'Pt.Pallet', valor: '#ffffff' }, //22
  { id: 'EXPOSITOR', nome: 'Expositor', valor: '#ffffff' }, //22
  
];

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
          navigation.navigate('Login');

          //BackHandler.exitApp();
        },
      },
    ]);
    return true;
  };

  //function para navegar para a tela de módulos
  //const backModules = (module) => {
    //navigation.navigate(module);
  //};


  //useEffect para evitar que o usuario vá para a tela de login clicando no botão voltar do dispositivo,
  //assim para ir para a tela de login usa apenas o botão SAIR do aplicativo
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, []);


  useEffect(() => {
    setCdEmpresa(cdempresa);
    // verifica se o cdItemEndereco e cdManLocalizador estão preenchidos
    // e chama a função handleConfirmManLocalizador se ambos estiverem preenchidos
    // e se o isFixarLocalizador for true, limpa o cdItemEndereco, caso contrário limpa ambos
    // cdManLocalizador e cdItemEndereco
    // Isso garante que a manutenção do localizador só será feita quando ambos os campos estiverem preenchidos
    // e o usuário tiver escolhido fixar o localizador ou não.
    if (cdItemEndereco?.length > 0 && cdManLocalizador?.length > 0) {      
      handleConfirmManLocalizador();    
    }

  }, [cdItemEndereco, cdManLocalizador,cdempresa]);



    //Fecha modal
    const handleCloseModal = () => {
        setCdManLocalizador('')
        setCdItemEndereco('')
        setIsFixarLocalizador(false);
        itensEndereco.length = 0; // Limpa a lista de itens
        setModalManLocal(false);      
    };   
  
  //Atribui o valor informado da reposição ao qtdeReposicao para exibir na tela principal
  const handleConfirmManLocalizador = () => {        
     if (cdItemEndereco?.length > 0 && cdManLocalizador?.length > 0) {
        
        
        //Chama a função para salvar a manutenção do localizador
        onSaveManLocalizador(cd_empresa,cdManLocalizador, cdItemEndereco, corSelecionada?corSelecionada:'null', 
                            areaSelecionada? areaSelecionada:'null');  

        // Pega o maior ID atual (convertido para número)
        const novoId = (
          itensEndereco.length > 0
            ? Math.max(
                ...itensEndereco
                  .map(item => Number(item.id))
                  .filter(id => !isNaN(id))
              ) + 1
            : 1
        ).toString();

        // Adiciona o novo item
        setItensEndereco(prev => [        
          {
            id: novoId,
            item: cdItemEndereco,
            endereco: cdManLocalizador
          },
          ...prev,
        ]);
        setCdItemEndereco(''); // Limpa o campo de item
      } else {
        Alert.alert('Atenção!', 'Preencha o localizador e o item para continuar!');
          
      };  
  }
  //Salva a manutenção do localizador
  const onSaveManLocalizador = async (empresa: string,cdLocalizador : string, cdItem : string, cor : string, area: string) => {
      console.log('onSaveManLocalizador', empresa,cdLocalizador, cdItem, cor, area);
    try {        
          const payload = {
              cd_empresa: cdempresa,                      
              cd_item: cdItemEndereco, 
              cd_localizador: cdManLocalizador,
              cor: corSelecionada ? corSelecionada : 'null',
              area: areaSelecionada ? areaSelecionada : 'null',
                         
          }
          const response = await api.post('/FunctionExecManut', payload)    
      } catch (error) {
          console.log('Erro:', error)
      } finally { 
      }
  }  

  return (
    <View style={styles.container}>
      <StatusBar />
      {/*Cabeçalho do app Bianchi Estoque*/}
      <View style={styles.header}>
        <Text style={styles.doHeader}>REPOSIÇÃO</Text>
      </View>

      {/*Detalhes do item scaneado na tela principal*/}
      <View>
        <DetailItem
          cdusuario={cd_usuario}
          cdempresa={cdempresa}
          repositor={repositor}
        />
        
      </View>
      <View style={styles.btSair}>
        <TouchableOpacity style={styles.btnLogout} onPress={handleBackButton}>
          <Text style={styles.textLogout}>SAIR</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.btManLocalizador}>
        <TouchableOpacity style={styles.btnManLocalizador} onPress={() =>{setModalManLocal(true)}}>
          <Text style={styles.textManLocalizador}><Feather name="menu" size={32} color="#4EA8DE" /></Text>
        </TouchableOpacity>
      </View>


      {/*Modal para manuteção do localizador do item*/}
      <View style={styles.containerModalDetalhe}>
          <Modal
              visible={modalManLocal}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseModal}
          >
              <View style={styles.modalManutLocalizador}>
                  <View style={styles.mainModalManLocalizador}>
                      <Text style={styles.textTituloModal}>
                          Manutenção Localizador!
                      </Text>
                                            
                      <Text style={styles.textTituloItem}>
                          Localizador: 
                      </Text>
                      
                      <TextInput
                          style={styles.inputItemModalManLocalizador}
                          onChangeText={setCdManLocalizador}
                          editable={!isFixarLocalizador}
                          placeholderTextColor="#c9c9c9"
                          placeholder='Localizador'
                          autoFocus
                          value={cdManLocalizador}
                      />

                      <View style={styles.switchLocalizador}>
                          <Text style={styles.textTituloSwitch}>
                              Fixar Localizador: 
                          </Text>
                          <View>
                          <Switch             
                              trackColor={{false: '#767577', true: '#81b0ff'}}
                              thumbColor={isFixarLocalizador ? '#f5dd4b' : '#f4f3f4'}
                              onValueChange={toggleSwitchLocalizador}
                              value={isFixarLocalizador}
                          /> 
                          </View>
                      </View>
                      
                      <Text style={styles.textTituloItem}>Cor:</Text>
                      <FlatList
                        data={cores}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={{
                              backgroundColor: item.valor,
                              borderRadius: 20,
                              width: 25,
                              height: 25,
                              margin: 5,
                              borderWidth: corSelecionada === item.id ? 2 : 1,
                              borderColor: corSelecionada === item.id ? '#4EA8DE' : '#0e0d0d',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => setCorSelecionada(item.id)}
                          >
                            {corSelecionada === item.id && (
                              <Feather name="circle" size={12} color="#000000"  />
                            )}
                          </TouchableOpacity>
                        )}
                      />
                      <Text style={styles.textTituloItem}>Area Armazenada:</Text>
                      <FlatList
                        data={area}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                          <>
                          <TouchableOpacity
                            style={{
                              backgroundColor: areaSelecionada === item.id ? '#4ae61a' : item.valor,
                              borderRadius: 2,
                              width: 20,
                              height: 20,
                              marginRight: 5,
                              borderWidth: areaSelecionada === item.id ? 2 : 1,
                              borderColor: areaSelecionada === item.id ? '#ffffff' : '#0e0d0d',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => setAreaSelecionada(item.id)}
                          >
                            
                            {areaSelecionada === item.id && (
                              
                              <Feather name="check" size={10} color="#f8f8f8" />
                            )}
                          </TouchableOpacity>
                          <Text style={{color:'#FFF', marginRight:4}}>{item.nome}</Text>
                          </>
                        )}
                      />

                      <Text style={styles.textTituloItem}>
                          Item: 
                      </Text>
                                                
                      <TextInput
                          style={styles.inputItemModalManLocalizador}
                          onChangeText={setCdItemEndereco}
                          placeholderTextColor="#c9c9c9"
                          placeholder='Item'
                          textAlign="center"
                          value={cdItemEndereco}
                      />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10,  marginBottom:10}}>
                    <Text style={{color:'#e7d466', fontWeight:'bold'}}>Cod_Item</Text>
                    <Text style={{color:'#e7d466', fontWeight:'bold'}}>Endereço</Text>
                  </View>
                  
                  <FlatList
                  style={styles.listItensEndereco}
                      data={itensEndereco}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                          <View style={styles.itemList}>                            
                              <Text >{item.item}</Text>
                               <Text >{item.endereco}</Text>
                          </View>
                      )}
                  />
                  {//<ButtonScaner onPress={handleConfirmManLocalizador} titleButton={'Confirmar'}/>}
                  }
                  <ButtonCancel onPress={handleCloseModal} titleButton={'Sair'}/>

              </View>
          </Modal>
      </View>
      
    </View>
  );
}

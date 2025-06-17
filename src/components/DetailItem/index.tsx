import React, { useState, useEffect, useCallback, useRef } from 'react';
import api from "../../services/api";
import { Text, View, Modal, TextInput, Alert,FlatList,Switch,TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Audio } from 'expo-av';
import { ButtonScaner } from '../ButtonScaner';
import { ButtonCancel } from '../ButtonCancel';
import { ButtonConfirm } from '../ButtonConfirm';
import { isCancel } from 'axios';

type Props = {
    cdusuario: String,
    cdempresa: String,
    repositor: String,
}


export function DetailItem({ cdusuario, cdempresa,repositor }: Props) {
    const [modal, setModal] = useState<'detailConfirmStock' | 'detail' | 'confirm' | 'itensOption' | ''>('')

    const [modalStyle, setModalStyle] = useState('primary')
    const [codItem, setCdItem] = React.useState('');
    const [codFabricante, setCdFabricante] = React.useState('');
    const [localItem, setLocalItem] = React.useState('');
    const [localItemExcesso, setLocalItemExcesso] = React.useState('');
    const [saldoItem, setSaldoItem] = React.useState('');
    const [ultimaEntradaItem, setUltimaEntradaItem] = React.useState('');
    const [qtdeReposicao, setQtdeReposicao] = React.useState('');
    const [qtdeReposicaoItem, setQtdeReposicaoItem] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [codFab, onChangeCodFab] = React.useState('');
    const [cdItemConfirmInput, oncdItemConfirmInput] = React.useState('');
 
    const [confirmEstoque, setConfirmEstoque] = React.useState('');
    const [cdExcesso, oncdExcesso] = React.useState('');

    const lastNameRef = useRef();
    const codItemRef = useRef();
    const codFabRef = useRef();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   

    const [itens, setItens] = useState([])
    const [itemClicado, setItemClicado] = useState(null);


    const onResumeSave = useCallback( () => {
        
        if(cdItemConfirmInput !== ''){
            //findLocalizador(cdItemConfirmInput)    
            setLocalItemExcesso(cdItemConfirmInput)
        }else if(cdExcesso !== ''){
            //findLocalizador(cdExcesso)
            setLocalItemExcesso(cdExcesso)
        }
        
    },[cdItemConfirmInput,cdExcesso])

    //Listener do campo excesso na tela de confirmação de reposição
    useEffect(() =>{
        if (localItemExcesso !== '') {
            saveReplacement()
        }
    },[localItemExcesso])

    //UseEffect da confirmação do localizador
    useEffect(() => {
        if (cdItemConfirmInput !== '') {            
            onResumeSave()                  
        }
    }, [cdItemConfirmInput])

    //UseEffect para buscar o item,  Atribui o item bipado ao state codItem, caso seja lido algum item para reposição, faz a busca no banco de dados 
    useEffect(() => {
        if (number !== '') {            
            execProcedure(number)
            onChangeNumber('')
        }
    }, [number])

    //Fecha modal
    const handleCloseModal = () => {
        onChangeCodFab('')
        cleanDetail()
        setModal('');      
    };

   

    //Limpa valores na tela principal
    const cleanDetail = () => {
        setCdItem('')
        setLocalItem('')
        setSaldoItem('')
        setUltimaEntradaItem('')
        setQtdeReposicao('')
        oncdItemConfirmInput('')
        oncdExcesso('')
        setLocalItemExcesso('')
    }

  
    //Atribui o valor informado da reposição ao qtdeReposicao para exibir na tela principal
    const handleInputQtde = (value) => {
        if( value.length > 3){
            Alert.alert(
                'ATENÇÃO',
                'Você informou a quantidade de '+ value +' Deseja continuar?',
                [
                    {
                        text: 'Não',
                        onPress: () => {
                          // Limpar o input ao clicar em "Não"
                          setQtdeReposicao('') 
                          lastNameRef.current.focus();
                        },
                        style: 'cancel',
                      },
                    {
                        text: "Sim",
                        onPress: () => {
                            setQtdeReposicao(value);                            
                        }
                    }
                ]                
            );  
        }else{
            setQtdeReposicao(value);
        }
        
    };
    
    //Atribui o valor informado da reposição ao qtdeReposicao para exibir na tela principal
    const handleConfirmEstoque = () => {        
        Alert.alert(
            'CONFIRMAÇÃO',
            'Deseja confirmar estoque?',
            [
                {
                    text: 'Não',
                    onPress: () => {
                        // Limpar o input ao clicar em "Não"
                        setConfirmEstoque('N')                     
                        onResumeSave()    
                    },
                    style: 'cancel',
                    },
                {
                    text: "Sim",
                    onPress: () => {
                        setConfirmEstoque('S') 
                        onResumeSave()    
                    }
                }
            ]                             
        );  
           
    };    
    
    //Seta o valor de setQtdeReposicaoItem, pegando do que foi digitado no input  quantidade
    const onVerify = () => {
        onChangeCodFab('')
        setModal('detailConfirmStock')
        setCdItem(codItem);

        if (qtdeReposicao === '1' || qtdeReposicao === '') {
            setQtdeReposicaoItem('1');
        } else {
            setQtdeReposicaoItem(qtdeReposicao);
        }

    };

    //Quando invocado limpa os useStates e fecha o modal que estiver aberto
    const onCancel = () => {
        cleanDetail()
        setModal('')
        {!isEnabled ? codItemRef.current.focus : codFabRef.current.focus}
    };

    //Executa som de sucesso quando o local de reposição está correto
    const handleAudioPlay = async () => {
        try {
            const { sound: soundObject } = await Audio.Sound.createAsync(
                require('../../res/error.mp3'),
                { shouldPlay: true }
            );

            setTimeout(() => {
                setModal('');
            }, 2000);

        } catch (error) {
            console.error('Erro ao reproduzir o áudio:', error);
        }
    };

    //Executa som de sucesso quando o local de reposição está correto
    const handleAudioPlaySucess = async () => {
        try {
            const { sound: soundObject } = await Audio.Sound.createAsync(
                require('../../res/sucess.mp3'),
                { shouldPlay: true }
            );

            setTimeout(() => {
                setModal('');
            }, 2000);
        } catch (error) {
            console.error('Erro ao reproduzir o áudio:', error);
        }
    };

    //Pega o item que foi selecionado de acordo com o fabricante escolhido
    const handleItemPress = (item) => {
        setCdItem('')
        setCdFabricante('')
        setLocalItem('')
        setSaldoItem('')
   
        
        setCdItem(item.cd_item)
        setCdFabricante( item.fabricante)
        setLocalItem(item.localizador)                    
        setSaldoItem(item.estoque)

        setModal('detail');
        setItemClicado(item);     
    };  


    //Busca item executando a stored procedure
    const execProcedure = async (item) => {
        try {
            const { data: res } = await api.post('/FunctionExec/cdusuario/cdempresa/descpesquisa/descwhereEx',{
                cdusuario    : cdusuario, 
                cdempresa    : cdempresa, 
                descpesquisa : item, 
                descwhereEx  : null
            });

            if (res !== null) {
                
                const local = res[0]
                  
                 setLocalItem(local.LOCALIZADOR);
                 setSaldoItem(local.ESTOQUE);  
                 setCdFabricante(local.FABRICANTE) 
                 setCdItem(local.cd_item)                            

                //Verifica a quantidade da Ultima Entrada
                const { data: notaEntrada } = await api.post('NotaEntrada/cd_empresa/cd_item', {
                    cd_empresa: cdempresa,
                    cd_item: local.cd_item,
                });
                
                
                if (notaEntrada.qt_entrada != null && notaEntrada.qt_entrada > 0) {
                    setUltimaEntradaItem(notaEntrada.qt_entrada)
                }
                
                const itemsWithSelectedProperties = res.map((item) => ({
                    cd_item: item.cd_item,
                    fabricante: item.FABRICANTE,
                    localizador : item.LOCALIZADOR,
                    estoque : item.ESTOQUE,
                  }));

                setItens(itemsWithSelectedProperties);

                onChangeCodFab('')
                if(itemsWithSelectedProperties.length > 1){                                                        
                    setModal('itensOption')                 
                }else{                               
                   setModal('detail')
                }
                
            }else{
                cleanDetail()
                Alert.alert('Código não encontrado!');
                setCdItem('')
                setModal('');
                return
            }
        } catch (error) {
           console.log('Erro:' + error); 
        }
    }
    
    //Salva dados no banco de dados
    const saveReplacement = useCallback(async () => {
		try {
            setModalStyle('primary')

           // if (cdItemConfirmInput.trim() !== '' && cdItemConfirmInput.trim() !== codItem.trim()) {                
             //   setModalStyle('secondary')
            //}

            const payload = {
				cd_empresa: cdempresa,
				cd_item: codItem,
				cd_usuario: repositor,
				LocalConfirmado: cdItemConfirmInput !== '' ? localItemExcesso : 0,
				qt_confirmada: qtdeReposicaoItem,
				confirmado_estoque: confirmEstoque,
				LocalExcesso: cdExcesso !== '' ? localItemExcesso : 0
			}

			const response = await api.post('Reposicao/Create', payload)

			if (response.data) {
				setModal('confirm')
				cleanDetail()
			} else {
				Alert.alert('Houve erro na inclusão, acione o setor de TI!')
			}
		} catch (error) {
			console.log('Erro:', error)
		}
	}, [cdExcesso,cdItemConfirmInput,codItem,localItem,localItemExcesso,qtdeReposicaoItem])   
    
    //Valida campo codigo do fabricante
    const validate = () =>{
        if(codFab === ''){
            Alert.alert('Informe um código de Fabricante')            
        }else{
            execProcedure(codFab)
        }
    }

    return (
        <View style={styles.container}>
            {/*View do Input que recebe o código do item que foi bipado*/}
            <View style={styles.listItem}>
                
                <Text style={styles.version}>Versão:1.0.8</Text>
                <View style={styles.infoUserEmp}>
                    <Text style={styles.textUserEmp}>
                    Repositor: {repositor} | Empresa: {cdempresa}
                    </Text>
                </View> 
                {!isEnabled ?
                    <View style={styles.headerDetail}>                                                    
                        <TextInput
                            style={styles.textInputItem}
                            onChangeText={onChangeNumber}
                            placeholderTextColor="#c9c9c9"
                            placeholder='Código do item...'
                            value={number}  
                            ref={codItemRef}                      
                            autoFocus />                       
                    </View> 
                :
                    <View style={styles.headerDetail}>                        
                        <TextInput
                            style={styles.textInputItem}
                            onChangeText={onChangeCodFab}
                            placeholderTextColor="#c9c9c9"
                            placeholder='Código do fabricante...'
                            value={codFab}
                            ref={codFabRef}
                            autoFocus />
                        <ButtonConfirm onPress={validate} titleButton={'Buscar'}/>    
                            
                    </View>
                }
                
            </View>
            <View style={styles.switchh}>
                <Switch             
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> 
            </View>

            {/*Modal mensagem confirmação de estoque*/}
            <View style={styles.containerModalDetalhe}>
                <Modal
                    visible={modal === 'confirm'}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                    onShow={modalStyle === 'primary' ? handleAudioPlaySucess : handleAudioPlay}
                >
                    <View style={modalStyle === 'primary' ? styles.modalDetalhesPrimary : styles.modalDetalhesSecond}>
                        <View style={styles.listItem}>
                            <Text style={styles.textTituloModalConfirm}>
                                {modalStyle === 'primary' ? 'LOCALIZADOR CORRETO!' : 'LOCALIZADOR INCORRETO!'}
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>


            {/*Modal para informar a quantidade de reposição*/}
            <View style={styles.containerModalDetalhe}>
                <Modal
                    visible={modal === 'detail'}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalDetalhes}>
                        <View style={styles.listItem}>
                            <Text style={styles.textTituloItem}>
                                ITEM: <Text style={styles.textItem}>{codItem}</Text>
                            </Text>
                            <Text style={styles.textTituloItem}>
                                FABRICA: <Text style={styles.textItem}> {codFabricante}</Text>
                            </Text>
                            <Text style={styles.textTituloItem}>
                                LOCAL: <Text style={styles.textItem}>{localItem}</Text>
                            </Text>

                            <Text style={styles.textTituloItem}>
                                SALDO: <Text style={styles.textItem}>{saldoItem}</Text>
                            </Text>

                            <Text style={styles.textTituloItem}>
                                ÚLTIMA ENT.: <Text style={styles.textItem}>{ultimaEntradaItem}</Text>
                            </Text>
                            <Text style={styles.textTituloModalQtde}>
                                INFORME A QUANTIDADE DE REPOSIÇÃO ABAIXO!
                            </Text>
                        </View>
                        <TextInput
                            style={styles.inputItemModal}
                            onChangeText={handleInputQtde}
                            placeholderTextColor="#c9c9c9"
                            autoFocus
                            ref={lastNameRef}
                            value={qtdeReposicao}                    
                            keyboardType="numeric" />
                        
                       
                        <ButtonScaner titleButton={'OK'} onPress={onVerify} />
                        <ButtonCancel titleButton={'CANCELAR'} onPress={onCancel} />
                    </View>
                </Modal>
            </View>

            {/*Modal para confirmar localizador da reposição ou excesso*/}
            <View style={styles.containerModalDetalhe}>
                <Modal
                    visible={modal === 'detailConfirmStock'}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalConfirmLocalizador}>
                        <View style={styles.listItem}>
                            <Text style={styles.textTituloModal}>
                                CONFIRMAR LOCALIZADOR!
                            </Text>

                            <Text style={styles.textTituloItem}>
                                ITEM: <Text style={styles.textItem}>{codItem}</Text>
                            </Text>
                            <Text style={styles.textTituloItem}>
                                ÚLTIMA ENT.: <Text style={styles.textItem}>{ultimaEntradaItem}</Text>
                            </Text>

                            <Text style={styles.textTituloItem}>
                                QTDE REPOSIÇÃO: <Text style={styles.textItem}>{qtdeReposicaoItem}</Text>
                            </Text>

                            <TextInput
                                style={styles.inputItemModalPrateleira}
                                onChangeText={oncdItemConfirmInput}
                                placeholderTextColor="#c9c9c9"
                                placeholder='Localizador'
                                autoFocus
                                value={cdItemConfirmInput}
                            />

                            <TextInput
                                style={styles.inputItemModalPrateleira}
                                onChangeText={oncdExcesso}
                                placeholderTextColor="#c9c9c9"
                                placeholder='Excesso'
                                value={cdExcesso}
                            />
                        </View>
                        <ButtonScaner onPress={handleConfirmEstoque} titleButton={'Confirmar'}/>
                        <ButtonCancel onPress={handleCloseModal} titleButton={'Cancelar'}/>

                    </View>
                </Modal>
            </View>




            {/*Modal para mostrar itens quando retornar mais de 1 registro na function spcPesIteAvaLookUp const execProcedure*/}
            <View style={styles.containerModalSelectItem}>
                <Modal
                    visible={modal === 'itensOption'}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                >
                <View style={styles.modalSelectItem}>
                    <View style={styles.listItem}>
                        <Text style={styles.textTituloModalSelectItem}>
                            ITEM X FABRICANTE
                        </Text>
                        
                        <FlatList 
                            style={styles.flatList}
                            data={itens}
                            keyExtractor={(item) => item.cd_item}
                            renderItem={({item})=> {                                                               
                            return (
                                <TouchableOpacity onPress={() => handleItemPress(item)}>
                                    <Text style={styles.flatListItem} >{item.cd_item}{item.fabricante}</Text>                                    
                                </TouchableOpacity>
                            )
                        }}/>                                                        
                    </View>
                    <ButtonCancel onPress={handleCloseModal} titleButton={'Cancelar'}/>
                </View>
                </Modal>
            </View>  
       
        </View>
    )
}
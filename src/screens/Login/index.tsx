import React, { useState, useEffect, useRef } from "react";
import { Text, Modal, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert, ActivityIndicator } from "react-native";
import { styles } from './style';
import api from "../../services/api";
import { ButtonScaner } from "../../components/ButtonScaner";
import { ButtonCancel } from "../../components/ButtonCancel";

export function Login({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [cdusuario, setCdUsuario] = useState('');
    const [repositor, setRepositor] = useState('');
    const [cdempresa, setCdEmpresa] = useState('');
    const [sucess, setSucess] = useState(false);
    const [modal, setModal] = useState<'infoUser' | ''>('');
    const [loading, setLoading] = useState(false); // Estado de carregamento para o botão "Acessar"
    const [loadingOk, setLoadingOk] = useState(false); // Estado de carregamento para o botão "OK"
    const ref = useRef();

    useEffect(() => {
        if (sucess) {
            setSucess(false);
            //navigation.navigate('Modules');
            navigation.navigate('ScreenReposicao', { paramKey: usuario, cdempresa: cdempresa, cdusuario: cdusuario, repositor: repositor });
        }
    }, [sucess, cdempresa, navigation]);

    // Fecha modal
    const handleCloseModal = () => {
        setModal('');
    };

    const handleInputConfirm = (value) => {
        if (value !== '') {
            setRepositor(value);
        } else {
            Alert.alert('Informe o nome do repositor!');
            return;
        }
    };

    const btnSubmit = () => {
        if (repositor !== '') {
            validaRepositor();
        } else {
            Alert.alert('Informe o código do repositor!');
            return;
        }
    };

    // Busca usuário no bd
    async function buscaUsuario() {
        if (usuario === '') {
            Alert.alert('Informe um usuário!');
            return;
        }

        setRepositor('');
        setLoading(true); // Inicia o carregamento

        try {
            const response = await api.post('/Users/userLogin', { userLogin: usuario });
            if (response.data[0]) {
                setCdEmpresa(response.data[0].cd_empresa);
                setCdUsuario(response.data[0].cd_usuario);

                if (response.data[0].espROLogin.reposicao === 1) {
                    setModal('infoUser');
                } else {
                    Alert.alert('ATENÇÃO','Usuário sem permissão para acessar o modulo Reposição!');
                }
            } else {
                Alert.alert('Usuário incorreto ou não está cadastrado no banco de dados!');
                return;
            }
        } catch (error) {
            Alert.alert('ATENÇÃO!', 'Consulta não realizada, erro no servidor de API, contate o setor de TI' + ' ' + error);
        } finally {
            setLoading(false); // Termina o carregamento
        }
    }

    async function validaRepositor() {
        if (repositor === '') {
            Alert.alert('Informe um repositor!');
            return;
        }

        setLoadingOk(true); // Inicia o carregamento do botão "OK"

        try {
            const response = await api.post('/Users/PostByCdUsuario', { cd_empresa: cdempresa, cd_usuario: repositor });
            if (response.data) {
                const repo = response.data.nome;
                console.log(repo);

                Alert.alert("CONFIRMAÇÃO", "CONFIRMA: " + repo + " COMO REPOSITOR?", [
                    {
                        text: "Não",
                        onPress: () => null,
                        style: "cancel"
                    },
                    {
                        text: "Sim",
                        onPress: () => {
                            setSucess(true);
                            setModal('');
                        }
                    }
                ]);
            } else {
                Alert.alert('Repositor incorreto ou não está cadastrado no banco de dados!');
                return;
            }
        } catch (error) {
            Alert.alert('Repositor incorreto ou não está cadastrado na empresa ' + cdempresa);
        } finally {
            setLoadingOk(false); // Termina o carregamento do botão "OK"
        }
    }

    const handInputChange = (value) => {
        setUsuario(value);
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <StatusBar />

            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
                <View style={styles.header}>
                    <Text style={styles.toHeader}>Bianchi</Text>
                    <Text style={styles.doHeader}>Estoque</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    autoCorrect={false}
                    autoFocus={true}
                    onChangeText={handInputChange}
                />

                <TouchableOpacity style={styles.btnSubmit} onPress={buscaUsuario} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.textSubmit}>Acessar</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.containerModalDetalhe}>
                <Modal
                    visible={modal === 'infoUser'}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalDetalhes}>
                        <View style={styles.listItem}>
                            <Text style={styles.textTituloModal}>
                                INFORME O REPOSITOR QUE FARÁ A REPOSIÇÃO!
                            </Text>
                        </View>
                        <TextInput
                            style={styles.inputItemModal}
                            onChangeText={handleInputConfirm}
                            placeholderTextColor="#000"
                            placeholder=''
                            keyboardType="numeric"
                            autoFocus
                        />
                        <TouchableOpacity onPress={btnSubmit} disabled={loadingOk}>
                            {loadingOk ? (
                                <ActivityIndicator size="small" color="#FFFFFF" />
                            ) : (
                                <ButtonScaner titleButton={'OK'} onPress={btnSubmit} />
                            )}
                        </TouchableOpacity>
                        <ButtonCancel onPress={handleCloseModal} titleButton={'Cancelar'} />
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidingView>
    );
}

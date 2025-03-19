import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

import { DetailItem } from "../DetailItem";

export function Reposicao({
  route,
  paramKey,
  cdempresa,
  cd_usuario,
  repositor,
}) {
  const navigation = useNavigation();

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

          //BackHandler.exitApp();
        },
      },
    ]);
    return true;
  };

  //function para navegar para a tela de módulos
  const backModules = (module) => {
    navigation.navigate(module);
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

  return (
    <View style={styles.container}>
      <StatusBar />
      {/*Cabeçalho do app Bianchi Estoque*/}
      <View style={styles.header}>
        {/* <TouchableOpacity
          style={styles.iconBack}
          onPress={() => backModules("Modules")}
        > 
          <Feather name="arrow-left" size={32} color="white" />
        </TouchableOpacity>*/}
        <Text style={styles.doHeader}>REPOSIÇÃO</Text>
      </View>

      {/*Detalhes do item scaneado na tela principal*/}
      <View>
        <DetailItem
          cdusuario={cd_usuario}
          cdempresa={cdempresa}
          repositor={repositor}
        />
        <View style={styles.infoUserEmp}>
          <Text style={styles.textUserEmp}>
            Repositor: {repositor} | Empresa: {cdempresa}
          </Text>
        </View>
      </View>
      <View style={styles.btSair}>
        <TouchableOpacity style={styles.btnLogout} onPress={handleBackButton}>
          <Text style={styles.textLogout}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

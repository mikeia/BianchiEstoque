import { View, StatusBar, Text,TouchableOpacity, Alert, BackHandler,} from "react-native";
import { styles } from "./style";
import { ModulesItem } from "../../components/ModulesItem";
import { useEffect } from "react";

export function Modules({ navigation }) {
  //useEffect para evitar que o usuario vá para a tela de login clicando no botão voltar do dispositivo,
  //assim para ir para a tela de login usa apenas o botão SAIR do aplicativo, ou confirmando a mensagem de saida
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, []);

  //function usada para a navegação entre telas
  const openModule = (module, params) => {
    navigation.navigate(module, params);
  };

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

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.textHeader}>ESCOLHA UM MODULO</Text>
      <ModulesItem
        buttonType="primary"
        titleButton={"REPOSIÇÃO"}
        onPress={() =>
          openModule("ScreenReposicao", {
            paramKey: "valor1",
            cdempresa: "empresa1",
            cd_usuario: "usuario1",
            repositor: "repositor1",
          })
        }
      />
      <ModulesItem
        buttonType="secondary"
        titleButton={"INVENTÁRIO"}
        onPress={() =>
          openModule("ScreenInventario", {
            paramKey: "valor1",
            cdempresa: "empresa1",
            cd_usuario: "usuario1",
            repositor: "repositor1",
          })
        }
      />
      <ModulesItem
        buttonType="primary"
        titleButton={"SEPARAÇÃO"}
        onPress={() =>
          openModule("#", {
            paramKey: "valor1",
            cdempresa: "empresa1",
            cd_usuario: "usuario1",
            repositor: "repositor1",
          })
        }
      />
      <View style={styles.btSair}>
        <TouchableOpacity style={styles.btnLogout} onPress={handleBackButton}>
          <Text style={styles.textLogout}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { Reposicao } from '../../components/Replacement'
import { View } from "react-native";
import { styles } from "./style";


export function ScreenReposicao({route}) {
  const { usuario,cdempresa,cdusuario,repositor } = route.params;
  return (
    <View style={styles.container}>
       <Reposicao route={route} paramKey={usuario} cdempresa={cdempresa} cd_usuario={cdusuario} repositor={repositor}/>      
    </View>
  )
}
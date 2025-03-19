import { Inventario } from "../../components/Inventory";
import { View } from "react-native";
import { styles } from "./style";


export function ScreenInventario({route}) {
  const { usuario,cdempresa,cdusuario,repositor } = route.params;
  return (
    <View style={styles.container}>
       <Inventario route={route} paramKey={usuario} cdempresa={cdempresa} cd_usuario={cdusuario} repositor={repositor}/>      
    </View>
  )
}
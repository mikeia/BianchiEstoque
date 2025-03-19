import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
  titleButton: String,
  onPress: () => void,
  buttonType: 'primary' | 'secondary';
}


export function ModulesItem({ onPress, titleButton, buttonType }: Props) {

  return (
    <View style={styles.container}>
        
        <TouchableOpacity  style={buttonType === 'primary' ? styles.btnPrimary : styles.btnSecondary}   onPress={onPress} >
            <Text style={styles.textBtnPrimary} >{titleButton}</Text>
        </TouchableOpacity>                    

    </View>
  )
}
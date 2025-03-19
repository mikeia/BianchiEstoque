import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style';

type Props = {
    titleButton: String,
    onPress: () => void
}



export function ButtonConfirm({ onPress, titleButton }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.btnScaner} onPress={onPress}  >
                    <Text style={styles.textButton}>
                        {titleButton}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
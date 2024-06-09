import { View, Text, TouchableOpacity } from 'react-native' 
import { styles } from './Styles';

export const VisualizeProductDetailScreen = ({ navigation, product, active, setActive }) => {
  
  console.log('VisualizeProductDetailScreen')

  return (
    <View style={active ? styles.modal : styles.modalInactive}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActive(false)}
      >
        <Text> Cerrar </Text>
      </TouchableOpacity> 
      <Text style={{ color: "white" }}>{product}</Text>
    </View>
  )
}
import { View, Text } from 'react-native' 
import { styles } from './Styles';
import { VisualizeProductDetailScreen } from '../visualize_product_detail/VisualizeProductDetailScreen';
import { useState } from 'react';

export const ProductListScreen = ({ navigation }) => {
  
  const [product, setProduct] = useState('' as string)
  const [active , setActive] = useState(false as boolean)

  const onTouchStartHandle = (product) => {
    setProduct(product)
    setActive(true)
    console.log('onTouchStartHandle')
  }

  return (
    <>
      <View style={styles.productSection}>
        <View
          style={styles.productContainer}
          onTouchStart={() => onTouchStartHandle(1)}
        >
          <View style={ styles.product}>
            <Text style={{color: "white"}}> 1 </Text>
          </View>
          <Text> Producto 1</Text>
        </View>

        <View
          style={styles.productContainer}
          onTouchStart={() => onTouchStartHandle(2)}
        >
          <View style={ styles.product}>
            <Text style={{color: "white"}}> 2 </Text>
          </View>
          <Text> Producto 2</Text>
        </View>

        <View
          style={styles.productContainer}
          onTouchStart={() => onTouchStartHandle(3)}
        >
          <View style={ styles.product}>
            <Text style={{color: "white"}}> 3 </Text>
          </View>
          <Text> Producto 3</Text>
        </View>
        
      </View>

      <VisualizeProductDetailScreen navigation={navigation} product={product} active={active} setActive={setActive}></VisualizeProductDetailScreen>
    </>
  )
}
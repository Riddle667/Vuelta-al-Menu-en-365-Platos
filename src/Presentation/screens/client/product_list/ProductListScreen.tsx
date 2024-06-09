import { View, Text, TouchableOpacity } from 'react-native' 
import { styles } from './Styles';
import { VisualizeProductDetailScreen } from '../visualize_product_detail/VisualizeProductDetailScreen';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const ProductListScreen = ({ navigation }) => {
  
  const images = [
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
  ]

  const [active , setActive] = useState(false as boolean)
  const [data, setData] = useState([] as {})
  const [shoppingCart, setShoppingCart] = useState([])
  const [productCounter, setProductCounter] = useState(0)
  const onTouchStartHandle = (data) => {
    setActive(true)
    setData(data)
    console.log('onTouchStartHandle')
  }

  const addProduct = (data, amount) => {
    const exists = shoppingCart.some((product) => {
      if (product.name == data.name) {
        product.amount += amount
        return true
      }
    });
    exists ? "" : setShoppingCart([...shoppingCart, { ...data, amount }])
    console.log("shoppingCart: ", shoppingCart)
  }

  const handleCartOpen = () => {
    console.log('handleCartOpen')
  }

  useEffect(() => {
    setProductCounter(shoppingCart.length)
  }, [shoppingCart])

  return (
    <>
      <View style={styles.cartSection}>
        <TouchableOpacity>
          <View style={styles.cartContainer}>
            <Ionicons name="cart" color="white" size={30} />
          </View>
        </TouchableOpacity>
        <Text style={productCounter >= 1 ? styles.productCounterText : {display: "none"}}>{productCounter}</Text>
      </View>
      <View style={styles.productSection}>
        <View
          style={styles.productContainer}
          onTouchStart={() => onTouchStartHandle({ name: "Producto 1", description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ", price: 100 })}
        >
          <View style={ styles.product}>
            <Text style={{color: "white"}}> 1 </Text>
          </View>
          <Text> Producto 1</Text>
        </View>
        <View
          style={styles.productContainer}
          onTouchStart={() => onTouchStartHandle({ name: "Producto 2", description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ", price: 200 })}
        >
          <View style={ styles.product}>
            <Text style={{color: "white"}}> 1 </Text>
          </View>
          <Text> Producto 1</Text>
        </View>
      </View>

      <VisualizeProductDetailScreen navigation={navigation} active={active} setActive={setActive} data={data} expanded={true} addProduct={addProduct}></VisualizeProductDetailScreen>
    </>
  )
}
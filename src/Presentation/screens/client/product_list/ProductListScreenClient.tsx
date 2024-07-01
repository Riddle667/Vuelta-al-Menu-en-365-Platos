import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import { styles } from './Styles';
import { VisualizeProductDetailScreen } from '../visualize_product_detail/VisualizeProductDetailScreen';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useShoppingCart } from '../../../context/shopping_cart/ShoppingCartContext';
import useViewModel from "./ViewModel"
import { ShoppingCartScreen } from '../shopping_cart/ShoppingCartScreen';

export const ProductListScreenClient = ({ navigation }) => {

  const {
    products,
    product,
    modalRemoveVisible,
    modalEditVisible,
    rol,
    getRol,
    removeProduct,
    handleModalRemove,
    getProducts,
    onChange,
    handleModalEdit,
    editProduct,
    selectImage,
  } = useViewModel();

  //  const { shoppingCart, setShoppingCart } = useShoppingCart();

  const images = [
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
    "https://www.istockphoto.com/es/search/2/image?mediatype=&phrase=url&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Furl%2F&utm_term=url",
  ]

  const [shoppingCart, setShoppingCart] = useState([])

  const [active , setActive] = useState(false as boolean)
  const [data, setData] = useState([] as {})
  const [productCounter, setProductCounter] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)
  const onTouchStartHandle = (data) => {
    setActive(true)
    setData(data)
    console.log('onTouchStartHandle')
  }

  const addProduct = (data, amount) => {
    // const exists = shoppingCart.some((product) => {
    //   if (product.name == data.name) {
    //     product.amount += amount
    //     return true
    //   }
    // });
    // exists ? "" : setShoppingCart([...shoppingCart, { ...data, amount }])
    // console.log("shoppingCart: ", shoppingCart)
  }

  const handleCartOpen = () => {
    console.log(shoppingCart)
    console.log("despues")
    if (productCounter < 1) return alert("No hay productos en el carrito")
    setCartOpen(true);
    // navigation.navigate('ShoppingCartScreen', { "navigation": navigation, "shoppingCart": shoppingCart})
  }

  useEffect(() => {
    setProductCounter(shoppingCart.length);
    getRol();
    getProducts();
  }, [shoppingCart])

  return (
    <>
      <View style={styles.cartSection}>
        <TouchableOpacity
          onPress={handleCartOpen}
        >
          <View style={styles.cartContainer}>
            <Ionicons name="cart" color="white" size={30} />
          </View>
        </TouchableOpacity>
        <Text style={productCounter >= 1 ? styles.productCounterText : {display: "none"}}>{productCounter}</Text>
      </View>
      <View style={styles.productSection}>
        <Text style={ styles.listTitle}>Lista de Productos</Text>
        <ScrollView style={styles.categoryListContainer}>
          {products.length == 0 ?
            <Text style={ styles.noData }>No hay Productos</Text>
            :
            ""
          }
          {products.map((product, index) => {

            if (parseInt(product.price) >= 1000) { 
              product.price = "$" + product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            console.log(product.image)
            return (
              <View style={styles.categoryContainer} key={index}>
                <View style={ styles.leftSection}>
                  <View
                    style={styles.categoryContainerImage}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" }}
                    />
                  </View>
                  <View style={ styles.categoryContainerText}>
                    <Text style={styles.categoryName}>{product.name}</Text>
                    <Text style={styles.categoryDescription}>{product.description}</Text>
                    <Text style={styles.categoryDescription}>{product.price}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShoppingCart([...shoppingCart, product])}
                  >
                    <Ionicons name="add" color="grey" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      {cartOpen ? <ShoppingCartScreen navigation={navigation} setCartOpen={setCartOpen} shoppingCart={shoppingCart}/>: "" }
      <VisualizeProductDetailScreen navigation={navigation} active={active} setActive={setActive} data={data} expanded={true} addProduct={addProduct}></VisualizeProductDetailScreen>
    </>
  )
}
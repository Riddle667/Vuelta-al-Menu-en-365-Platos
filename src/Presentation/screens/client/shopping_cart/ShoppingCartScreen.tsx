import { View,Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const ShoppingCartScreen = ({ navigation, shoppingCart, setCartOpen, setShoppingCart, setProductCounter }) => {

  const handleClose = () => { 
    setCartOpen(false)
  }

  const handleRemoveProduct = (productToRemove) => {
    const newShoppingCart = shoppingCart.filter((product) => product.name !== productToRemove.name)
    setProductCounter(counter => counter - productToRemove.amount)
    setShoppingCart(newShoppingCart)
  }

  return (
    <>
      <ScrollView style={styles.productSection}>
        <View style={ styles.goBackIcon}>
          <TouchableOpacity onPress={handleClose}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        {shoppingCart.map((product) => { 
          return (
            <View key={ product.id} style={styles.productContainer}>
              <View style={styles.product} />
              <View>
                <View style={ styles.productTextContainer}>
                  <Text style={ styles.productTitleText}> {product.name}</Text>
                  <Text style={styles.productText}> Cantidad: {product.amount}</Text>
                  <Text style={ styles.productText}> Precio c/u {product.price}</Text>
                </View>
                <View
                  style={styles.cartContainer}
                  onTouchStart={() => handleRemoveProduct(product)}
                >
                  <Ionicons name="trash" color="white" size={20} />
              </View>
            </View>
            </View>
          )
        })}
      </ScrollView>
    </>
  );
};
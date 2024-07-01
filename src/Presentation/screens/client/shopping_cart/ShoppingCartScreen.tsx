import { View,Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useShoppingCart } from '../../../context/shopping_cart/ShoppingCartContext';

export const ShoppingCartScreen = ({ navigation, shoppingCart, setCartOpen }) => {

  const handleClose = () => { 
    setCartOpen(false)
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
                  <Text style={ styles.productText}> Precio Total {product.amount * product.price}</Text>
                </View>
                <View
                  style={styles.cartContainer}
                  // onTouchStart={() => handleRemoveProduct(product.name)}
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
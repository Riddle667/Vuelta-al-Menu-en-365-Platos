import { View,Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export const ShoppingCartScreen = ({ navigation, shoppingCart, setCartOpen, setShoppingCart, setProductCounter }) => {

  const [modalRemoveVisible, setModalRemoveVisible] = useState({
    visible: false,
    product: {}
  })


  const handleClose = () => { 
    setCartOpen(false)
  }

  const handleRemoveProduct = (productToRemove) => {
    const newShoppingCart = shoppingCart.filter((product) => product.name !== productToRemove.name)
    setProductCounter(counter => counter - productToRemove.amount)
    setShoppingCart(newShoppingCart)
    setModalRemoveVisible({ visible: false, product: {} })
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
                  onTouchStart={() => setModalRemoveVisible({visible: true, product: product})}
                >
                  <Ionicons name="trash" color="white" size={20} />
              </View>
            </View>
            </View>
          )
        })}
        {shoppingCart.length == 0
          ?
          <View>
            <Text style={ styles.noData }>No hay Productos</Text>
          </View>
          : <View>
          <TouchableOpacity style={ styles.payButton}>
            <Text style={ styles.payText}>
          Continuar con el pago
          </Text>
        </TouchableOpacity>
      </View>}
      </ScrollView>
      {modalRemoveVisible.visible ?
        <View style={ styles.modal}>
          <View style={ styles.modalContainer}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>¿Eliminar Producto de la lista?</Text>
            <View style={ styles.modalButtons}>
              <TouchableOpacity
                onPress={() => handleRemoveProduct(modalRemoveVisible.product)}
                style={ styles.modalAcceptButton}
              >
                <Text
                  style={{color: "white"}}
                >
                  Si, eliminar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalRemoveVisible({ visible: false, product: {} })}
                style={ styles.modalBackButton}
              >
                <Text
 
                >
                    No, volver
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        : ""
      }
    </>
  );
};
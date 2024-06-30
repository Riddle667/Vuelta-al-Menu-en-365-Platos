import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const ListProductsScreen = ({ navigation }) => {
  
  const {
    products,
    modalRemoveVisible,
    removeProduct,
    handleModalRemove,
    getProducts,
    
  } = useViewModel();
  
  console.log(products[0])
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> Lista de Categorias </Text>
        <ScrollView style={styles.categoryListContainer}>
          {products.length == 0 ?
            <Text style={ styles.noData }>No hay categorias</Text>
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
                <View style={styles.categoryOptionsContainer}>
                  <TouchableOpacity
                    onPress={() => handleModalRemove(true, product.id)}
                  >
                    <Image
                      style={ styles.icon}
                      source={require('../../../../../../assets/basurero.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                  >
                    <Image
                      style={ styles.icon}
                      source={require('../../../../../../assets/boligrafo.png')}
                      />
                  </TouchableOpacity> 
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      {modalRemoveVisible ?
        <View style={ styles.modal}>
          <View style={ styles.modalContainer}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>¿Eliminar Categoría?</Text>
            <View style={ styles.modalButtons}>
              <TouchableOpacity
                onPress={removeProduct}
                style={ styles.modalAcceptButton}
              >
                <Text
                  style={{color: "white"}}
                >
                  Si, eliminar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleModalRemove(false)}
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
  )
}
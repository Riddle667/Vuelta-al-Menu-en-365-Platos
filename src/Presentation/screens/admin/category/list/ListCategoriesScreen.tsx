import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const ListCategoriesScreen = ({ navigation }) => {
  
  const { getCategories, removeCategory, setModalVisible, openModal, modalVisible, categories, idToRemove } = useViewModel();
  
  console.log(categories[0])

  const imagen = "data:image/png;base64,/9j/4QIBRXhpZgAATU0AKgAAAAgABwEAAAQAAAABAAAEgAEQAAIAAAAUAAAAYgEBAAQAAAABAAAGAAEPAAIAAAAHAAAAdodpAAQAAAABAAAAkQESAAQAAAABAAAAAAEyAAIAAAAUAAAAfQAAAABzZGtfZ3Bob25lNjRfeDg2XzY0AEdvb2dsZQAyMDI0OjA1OjE2IDExOjI3OjE1AAAPkAAAAgAAAAUAAAFLkgIAB"

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> Lista de Categorias </Text>
        <ScrollView style={styles.categoryListContainer}>
          {categories.map((category, index) => {
            console.log(category.image)
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
                      <Text>{category.name}</Text>
                      <Text>{category.description}</Text>
                  </View>
                </View>
                <View style={styles.categoryOptionsContainer}>
                  <TouchableOpacity
                    onPress={() => openModal(true, category.id)}
                  >
                    <Image
                      style={ styles.icon}
                      source={require('../../../../../../assets/basurero.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity>
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
      {modalVisible ?
        <View style={ styles.modal}>
          <View style={ styles.modalContainer}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>¿Eliminar Categoría?</Text>
            <View style={ styles.modalButtons}>
              <TouchableOpacity
                onPress={removeCategory}
                style={ styles.modalAcceptButton}
              >
                <Text
                  style={{color: "white"}}
                >
                  Si, eliminar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openModal(false)}
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
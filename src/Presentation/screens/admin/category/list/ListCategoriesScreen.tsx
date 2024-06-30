import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const ListCategoriesScreen = ({ navigation }) => {
  
  const {
    getCategories,
    removeCategory,
    handleModalRemove,
    handleModalEdit,
    editCategory,
    onChange,
    modalEditVisible,
    modalRemoveVisible,
    categories,
    category,
  } = useViewModel();
  
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
          {categories.length == 0 ?
            <Text style={ styles.noData }>No hay categorias</Text>
            :
            ""
          }
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
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.categoryDescription}>{category.description}</Text>
                  </View>
                </View>
                <View style={styles.categoryOptionsContainer}>
                  <TouchableOpacity
                    onPress={() => handleModalRemove(true, category.id)}
                  >
                    <Image
                      style={ styles.icon}
                      source={require('../../../../../../assets/basurero.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleModalEdit(true, {
                      id: category.id,
                      name: category.name,
                      description: category.description,
                    
                    })}
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

      {modalEditVisible ?
        <View style={ styles.modal}>
          <View style={ styles.modalContainer}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>Editar Categoría</Text>
            <View>
              <View style={styles.textInputContainer}>
                <Text style={ styles.InputText}>Nombre</Text>
                <TextInput
                  style={styles.inputTextArea}
                  placeholder='Nombre de la categoria'
                  onChangeText={(text) => onChange("name", text)}
                >
                  {category.name}
                </TextInput>
              </View>
              <View style={styles.textInputContainer}>
                <Text style={ styles.InputText}>Descripción</Text>
                <TextInput
                  style={styles.inputTextArea}
                  placeholder='Descripción de la categoria'
                  onChangeText={(text) => onChange("description", text)}
                >
                {category.description}
                </TextInput>
              </View>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={editCategory}
                style={ styles.modalAcceptButton}
              >
                <Text
                  style={{color: "white"}}
                >
                  Confirmar cambios
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleModalEdit(false)}
                style={ styles.modalBackButton}
              >
                <Text
                >
                    Descartar cambios
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
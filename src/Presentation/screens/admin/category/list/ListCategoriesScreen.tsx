import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const ListCategoriesScreen = ({ navigation }) => {
  
  const { getCategories, categories } = useViewModel();

  
  console.log(categories[0])

  const imagen = "data:image/png;base64,/9j/4QIBRXhpZgAATU0AKgAAAAgABwEAAAQAAAABAAAEgAEQAAIAAAAUAAAAYgEBAAQAAAABAAAGAAEPAAIAAAAHAAAAdodpAAQAAAABAAAAkQESAAQAAAABAAAAAAEyAAIAAAAUAAAAfQAAAABzZGtfZ3Bob25lNjRfeDg2XzY0AEdvb2dsZQAyMDI0OjA1OjE2IDExOjI3OjE1AAAPkAAAAgAAAAUAAAFLkgIAB"

  useEffect(() => {
    getCategories();
  }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Categorias </Text>
      <ScrollView style={styles.categoryListContainer}>
        {categories.map((category, index) => {
          console.log(category.image)
          return (
            <View style={styles.categoryContainer} key={index}>
              <Image
                style={styles.image}
                source={{ uri: "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" }}
              />
              <View>
                <Text>{category.name}</Text>
                <Text>{category.description}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
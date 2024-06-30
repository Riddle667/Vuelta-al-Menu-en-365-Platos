import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import React from 'react';
import useViewModel from './ViewModel';

export const CreateProductScreen = ({ navigation }) => {

  const { name, description, images, onChange, selectImage, createProduct, errorsMessages, price } = useViewModel();
  
  console.log(errorsMessages);

return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Crear Producto!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Nombre'}
            keyboardType='default'
            onChange={(e) => onChange('name', e.nativeEvent.text)}
          />
        </View>
        {errorsMessages.name && <Text style={styles.errorMessage}>{errorsMessages.name}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Precio'}
            keyboardType='numeric'
            value={price == undefined ? "" : price.toString()}
            onChange={(e) => onChange('price', e.nativeEvent.text)}
          />
        </View>
        {errorsMessages.price && <Text style={styles.errorMessage}>{errorsMessages.price}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTextArea}
            placeholder={'Descripción'}
            keyboardType='default'
            onChange={(e) => onChange('description', e.nativeEvent.text)}
            multiline={true}
          />
        </View>
        {errorsMessages.description && <Text style={styles.errorMessage}>{errorsMessages.description}</Text>}
        <TouchableOpacity 
          style={styles.imageButton}
          onPress={selectImage}  
        >
          <Text style={styles.imageButtonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{uri: (images.length == 0) ? 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg' : images[0]}}
        />
        {errorsMessages.images && <Text style={styles.errorMessageImage }>{errorsMessages.images}</Text>}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => createProduct(navigation)}  
        >
          <Text style={styles.buttonText}>Crear Categoría +</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
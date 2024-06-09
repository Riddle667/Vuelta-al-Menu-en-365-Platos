import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const CreateCategoryScreen = ({navigation}) => {

  const { name, description, image, onChange, selectImage, CreateCategory, errorsMessages } = useViewModel();

  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Crear Categoría!</Text>
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
          source={{uri: (image == "") ? 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg' : image}}
        />
        {errorsMessages.image && <Text style={styles.errorMessageImage }>{errorsMessages.image}</Text>}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => CreateCategory(navigation)}  
        >
          <Text style={styles.buttonText}>Crear Categoría +</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../navigator/MainStackNavigator'
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator'

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryUpdateScreen'>{}

export const AdminCategoryUpdateScreen = ({navigation, route}: Props) => {

    const{category} = route.params
    const {name, description, responseMessage, loading, image, takePhoto, pickImage, onChange, updateCategory} = useViewModel(category)
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
      if (responseMessage !== '') {
        ToastAndroid.show(responseMessage, ToastAndroid.LONG)
      }
    }, [responseMessage])
    

  return (
    <View style = {styles.container}>
        <TouchableOpacity 
            style ={styles.imageContainer}
            onPress={()=> setModalVisible(true)}
        
        >
            {
                image ==''
              
                ? <Image
                    style ={styles.image}
                    source = {require('../../../../../../assets/agregar imagen.png')}
                />
                :
                <Image
                  source={{uri: image}}
                  style={styles.image}
                />
              }
        </TouchableOpacity>

        <View style = {styles.form}>
            <CustomTextInput
                placeholder='Nombre de la categoria'
                image= {require('../../../../../../assets/Icono menu.png')} 
                keyboardType='default'
                property='name'
                value = {name}
                onChangeText={onChange}
            />
            <CustomTextInput
                placeholder='Descripcion de la categoria'
                image= {require('../../../../../../assets/Icono descripcion.png')} 
                keyboardType='default'
                property='description'
                value = {description}
                onChangeText={onChange}
            />

        </View>

        <View style = {styles.buttonContainer}>
            <RoundedButton
                text = 'Actualizar la Categoria'
                onPress={() => updateCategory()}
            />
        </View>

        <ModalPickImage
            openGallery={pickImage}
            openCamera={takePhoto}
            modalUseState={modalVisible}
            setModalUseState={setModalVisible}
          />
          {
            loading && 
            <ActivityIndicator 
            style ={MyStyles.loading} 
            size="large" 
            color={MyColors.primary} 
            />

          }
    </View>
  )
}


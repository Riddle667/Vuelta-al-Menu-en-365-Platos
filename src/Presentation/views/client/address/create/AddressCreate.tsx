import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressCreateScreen'> {}

export const ClientAddressCreateScreen = ({navigation,route }:Props) => {

    const {address, casa, refPoint, responseMessage, loading, onChange, createAddress, onChangeRefPoint} = useViewModel()
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {

      if (route.params) {
        onChangeRefPoint(route.params?.refPoint, route.params?.latitude, route.params?.longitude)
      }
    }, [route.params?.refPoint])


  
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
            <Image
                style ={styles.image}
                source = {require('../../../../../../assets/mapa.png')}
            />
        </TouchableOpacity>

        <View style = {styles.form}>
            <CustomTextInput
                placeholder='Nombre de Direccion'
                image= {require('../../../../../../assets/nombreDireccion.png')} 
                keyboardType='default'
                property='address'
                value = {address}
                onChangeText={onChange}
            />
            <CustomTextInput
                placeholder='Casa/depto'
                image= {require('../../../../../../assets/edificio.png')} 
                keyboardType='default'
                property='casa'
                value = {casa}
                onChangeText={onChange}
            />

            <TouchableOpacity
            onPress={() => navigation.navigate('ClientAddressMapScreen')}
            >

            <CustomTextInput
                placeholder='Putno de referencia'
                image= {require('../../../../../../assets/Preferencia.png')} 
                keyboardType='default'
                property='refPoint'
                value = {refPoint}
                onChangeText={onChange}
                editable={false}
            />

            </TouchableOpacity>

            

        </View>

        <View style = {styles.buttonContainer}>
            <RoundedButton
                text = 'Crear Direccion'
                onPress={() => createAddress()}
            />
        </View>
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


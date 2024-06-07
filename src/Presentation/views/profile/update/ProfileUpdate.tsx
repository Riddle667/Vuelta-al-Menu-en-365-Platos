import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, StyleSheet, ScrollView, Modal, ActivityIndicator } from 'react-native'
import { RoundedButton } from '../../../../Presentation/components/RoundedButton';
import { MyColors } from '../../../../Presentation/theme/AppTheme';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../components/CustomTextInput';
import styles from './Styles'
import { ModalPickImage } from '../../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';


interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> {}

export const ProfileUpdateScreen = ({navigation, route}: Props) => {

    const{user} = route.params;

    const{name, lastname, phone, image, onChange, update, takePhoto, errorMessage, isValidForm, pickImage, loading, onChangeInfoUpdate, successMessage } = useViewModel(user);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
      if(successMessage !=''){
              ToastAndroid.show(successMessage, ToastAndroid.LONG);
      }
    }, [successMessage])

   return (
      <View style={styles.LoginScreen}>
          <Image
          source={require('../../../../../assets/cocinero.png') } 
          style={ styles.ImageBackground}
          />

          <View style={styles.logoLoginImage}>
            <TouchableOpacity onPress={() =>setModalVisible(true)}>
              {
                image ==''
              
                ? <Image
                    style = {styles.logoImage}
                    source={{uri: user?.image}}
                />
                :
                <Image
                  source={{uri: image}}
                  style={styles.logoImage}
                />
              }

            </TouchableOpacity>
              <Text style={styles.logoLoginText}>Seleccione una imagen</Text>
          </View>

          

          <View style={styles.form}>

            <ScrollView>

              <CustomTextInput 
                placeholder='Nombre'
                keyboardType='default'
                image = {require('../../../../../assets/Usuario.png')}
                property={'name'}
                onChangeText={onChange}
                value={name}
                />

                <CustomTextInput 
                placeholder='Apellido'
                keyboardType='default'
                image = {require('../../../../../assets/Usuario.png')}
                property={'lastname'}
                onChangeText={onChange}
                value={lastname}
                />

                <CustomTextInput 
                placeholder='Telefono'
                keyboardType='default'
                image = {require('../../../../../assets/Telefono.png')}
                property={'phone'}
                onChangeText={onChange}
                value={phone}
                 />
            
                <View style={{marginTop:5}}>
                
                <RoundedButton text='CONFIRMAR' onPress={() => {
                  if (isValidForm()) {
                    update();
                  }
                }} />

                </View>

            </ScrollView>
          
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
            style ={styles.loading} 
            size="large" 
            color={MyColors.primary} 
            />

          }
          
          
      </View>
    );
};
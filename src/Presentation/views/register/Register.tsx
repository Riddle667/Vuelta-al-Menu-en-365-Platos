import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, StyleSheet, ScrollView } from 'react-native'
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { MyColors } from '../../../Presentation/theme/AppTheme';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

export const RegisterScreen = () => {

    const{name, lastname, phone, email, password, confirmPassword, onChange, register, errorMessage, isValidForm } = useViewModel();

    useEffect(() => {
      if(errorMessage !=''){
              ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
    }, [errorMessage])
    
   return (
      <View style={styles.LoginScreen}>
          <Image
          source={require('../../../../assets/cocinero.png') } 
          style={ styles.ImageBackground}
          />

          <View style={styles.logoLoginImage}>
            <Image
                source={require('../../../../assets/Imagen.png')}
                />

              <Text style={styles.logoLoginText}>Seleccione una imagen</Text>
          </View>

          

          <View style={styles.form}>

            <ScrollView>

              <CustomTextInput 
                placeholder='Nombre'
                keyboardType='default'
                image = {require('../../../../assets/Usuario.png')}
                property={'name'}
                onChangeText={onChange}
                value={name}
                />

                <CustomTextInput 
                placeholder='Apellido'
                keyboardType='default'
                image = {require('../../../../assets/Usuario.png')}
                property={'lastname'}
                onChangeText={onChange}
                value={lastname}
                />

                <CustomTextInput 
                placeholder='Telefono'
                keyboardType='default'
                image = {require('../../../../assets/Telefono.png')}
                property={'phone'}
                onChangeText={onChange}
                value={phone}
                 />

                <CustomTextInput 
                placeholder='Example@gmail.com'
                keyboardType='email-address'
                image = {require('../../../../assets/icono correo.png')}
                property= 'email'
                onChangeText={onChange}
                value={email}
                />

                <CustomTextInput 
                placeholder='Contraseña'
                keyboardType='default'
                image = {require('../../../../assets/icono contraseña.png')}
                property= 'password'
                onChangeText={onChange}
                value={password}
                secureTextEntry={true}
                 />

                <CustomTextInput 
                placeholder='Confirmar Contraseña'
                keyboardType='default'
                image = {require('../../../../assets/icono contraseña.png')}
                property= 'confirmPassword'
                onChangeText={onChange}
                value={confirmPassword}
                secureTextEntry={true}
                />
            
                <View style={{marginTop:5}}>
                
                <RoundedButton text='CONFIRMAR' onPress={() => {
                  if (isValidForm()) {
                    register();
                  }
                }} />

                </View>

            </ScrollView>
          
          </View>

      </View>
    );
}
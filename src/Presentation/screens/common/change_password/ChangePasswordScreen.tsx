import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import useViewModel from './ViewModel';

export const ChangePasswordScreen = ({navigation}) => {

  const {password, confirmPassword, changePassword, onChange, errorsMessages, errorsResponse } = useViewModel();

  return(
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={require('../../../../../assets/background.png')}
      />
      <View style={styles.form}>
        <Text style={styles.loginText}>Cambio de Contraseña</Text>
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Nueva Contraseña'}
              keyboardType='default'
              secureTextEntry={true}
              onChange={(e) => onChange('password', e.nativeEvent.text)}
            />
          </View>
          {errorsMessages.password && <Text style={styles.errorMessage}>{errorsMessages.password}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Repetir Contraseña'}
              keyboardType='default'
              secureTextEntry={true}
              onChange={(e) => onChange('confirmPassword', e.nativeEvent.text)}
            />
          </View>
          {errorsMessages.confirmPassword && <Text style={styles.errorMessage}>{errorsMessages.confirmPassword}</Text>}
        </View>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => changePassword(navigation)}  
        >
          <Text style={styles.loginButtonText}>ACTUALIZAR DATOS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('RegisterScreen')}  
        >
        </TouchableOpacity>
      </View>
    </View>
  )
}
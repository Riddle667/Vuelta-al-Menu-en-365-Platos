import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const RegisterScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={require('../../../../assets/background.png')}
      />
      <View style={styles.form}>
        <Text style={styles.RegisterText}>Registrar Usuario</Text>
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/user-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Nombre'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/user-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Apellido'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/phone-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Teléfono'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/email-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Correo'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Contraseña'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Confirmar contraseña'}
              keyboardType='default'
              secureTextEntry={false}
            />
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
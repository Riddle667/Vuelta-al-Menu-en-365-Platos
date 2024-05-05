import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const LoginScreen = () => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={require('../../../../assets/background.png')}
      />
      <View style={styles.form}>
        <Text style={styles.loginText}>Inicio de Sesión</Text>
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/email-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Ingrese su email'}
              placeholderTextColor={'white '}
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
              placeholder={'******'}
              placeholderTextColor={'white'}
              keyboardType='default'
              secureTextEntry={true}
            />

          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
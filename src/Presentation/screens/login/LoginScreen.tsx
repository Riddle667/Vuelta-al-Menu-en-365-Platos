import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const LoginScreen = ({navigation}) => {
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
              placeholder={'email'}
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
              placeholder={'contraseña'}
              keyboardType='default'
              secureTextEntry={true}
            />

          </View>
        </View>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('AdminHomeScreen')}  
        >
          <Text style={styles.loginButtonText}>INGRESAR</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('RegisterScreen')}  
        >
          <Text style={styles.registerLink}>¿No tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
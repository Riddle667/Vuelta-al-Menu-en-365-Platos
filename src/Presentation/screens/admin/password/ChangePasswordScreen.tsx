import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const ChangePasswordScreen = ({navigation}) => {
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
            />
          </View>
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
        </TouchableOpacity>
      </View>
    </View>
  )
}
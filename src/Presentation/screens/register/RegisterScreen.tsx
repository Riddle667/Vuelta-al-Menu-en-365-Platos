import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import RegisterViewModel from './ViewModel';
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = ({navigation}) => {

  const { name, lastname, email, errorsMessages, password, phone, onChange, register } = RegisterViewModel();

  return(
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={require('../../../../assets/background.png')}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/Imagen.png')}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

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
              onChangeText={text => onChange('name', text)}
              secureTextEntry={false}
            />
          </View>
          {errorsMessages.name && <Text style={styles.errorMessage}>{errorsMessages.name}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/user-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Apellido'}
              keyboardType='default'
              onChangeText={text => onChange('lastname', text)}
              secureTextEntry={false}
            />
          </View>
          {errorsMessages.lastname && <Text style={styles.errorMessage}>{errorsMessages.lastname}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/phone-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Teléfono'}
              keyboardType='default'
              onChangeText={text => onChange('phone', text)}
              secureTextEntry={false}
            />
          </View>
          {errorsMessages.phone && <Text style={styles.errorMessage}>{errorsMessages.phone}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/email-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Correo'}
              keyboardType='default'
              onChangeText={text => onChange('email', text)}
              secureTextEntry={false}
            />
          </View>
          {errorsMessages.email && <Text style={styles.errorMessage}>{errorsMessages.email}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Contraseña'}
              keyboardType='default'
              onChangeText={text => onChange("password", text)}
              secureTextEntry={true}
            />
          </View>
          {errorsMessages.password && <Text style={styles.errorMessage}>{errorsMessages.password}</Text>}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../../../assets/password-icon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder={'Confirmar contraseña'}
              keyboardType='default'
              onChangeText={text => onChange("confirmPassword", text)}
              secureTextEntry={true}
            />
            </View>
            {errorsMessages.confirmPassword && <Text style={styles.errorMessage}>{errorsMessages.confirmPassword}</Text>}
            <RoundedButton text='Registrar' onPress={() => register(navigation)} />

        </View>
      </View>
      </ScrollView>
    </View>
  )
}
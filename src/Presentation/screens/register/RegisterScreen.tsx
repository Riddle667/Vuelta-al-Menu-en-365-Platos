import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import RegisterViewModel from './ViewModel';
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = ({navigation}) => {

  const { name, lastName, email, password, phone, onChange, register } = RegisterViewModel();
  let password2 = '';
  let password1 = '';

  const validate = () => {
    if (name === '' || lastName === '' || email === '' || password1 === '' || password2 === '' || phone === '') {
      alert('Todos los campos son obligatorios');
    } else if (password1 !== password2) {
      alert('Las contraseñas no coinciden');
    } else {
      onChange('password', password1);
      register();
    }
  }

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
              value={name}
              onChangeText={text => onChange('name', text)}
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
              value={lastName}
              onChangeText={text => onChange('lastName', text)}
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
              value={phone}
              onChangeText={text => onChange('phone', text)}
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
              value={email}
              onChangeText={text => onChange('email', text)}
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
              value={password1}
              onChangeText={text => password1 = text}
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
              value={password2}
              onChangeText={text => password2 = text}
              secureTextEntry={false}
            />
          </View>
          <RoundedButton text='Registrar' onPress={ () => validate() } />
        </View>

        

      </View>
      </ScrollView>
    </View>
  )
}
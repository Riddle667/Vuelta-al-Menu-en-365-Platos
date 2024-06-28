import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '../../navigator/MainAppStack'
import Loginstyles from './Styles'
import { RoundedButton } from '../../components/RoundedButton'
import LoginViewModel from './ViewModel'
import { AuthContext } from '../../context/auth/AuthContext'

interface Props extends StackScreenProps<RootStackParamsList, 'LoginScreen'> {}

export const LoginScreen = ({navigation, route}: Props) => {

  const { email, password, onChange, setValues, login} = LoginViewModel();

  const {status, user} = useContext(AuthContext);

  return (
    <View style={Loginstyles.container}>
        <Image
            source={ require('../../../../assets/chef.jpg') } 
            style= {Loginstyles.imageBackground}
        />
        <View style={ Loginstyles.logoContainer }>
            <Image
                source={ require('../../../../assets/logo.png') }
                style={ Loginstyles.logo }
            /> 
            
            <Text style={ Loginstyles.logoText }>Vuelta al menu en 365 platos</Text>
            
        </View>

        <View style={ Loginstyles.form }>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >

            <Text style={ Loginstyles.formText }>Iniciar Sesión</Text>
            <View style={ Loginstyles.formInput }>
              <Image
                source={ require('../../../../assets/email.png') }
                style={ Loginstyles.formIcon }
              />

            <TextInput
              style={Loginstyles.formTextInput}
              placeholder={'Ingrese su email'}
              keyboardType='default'
              value={email}
              onChangeText={text => onChange('email', text)}
              secureTextEntry={false}
            />
            </View>

            <View style={ Loginstyles.formInput }>
              <Image
                source={ require('../../../../assets/password-icon.png') }
                style={ Loginstyles.formIcon }
              />
              <TextInput
                style={Loginstyles.formTextInput}
                placeholder={'******'}
                keyboardType='default'
                value={password}
                onChangeText={text => onChange('password', text)}
                secureTextEntry={true}
              />

            </View>
            <View style= {{ marginTop: 30 }}>
              <RoundedButton text='Iniciar Sesión' onPress={ () => login() } />
                <View style= { Loginstyles.formRegisterText }>
                <Text>¿No estás registrado?</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
                <Text style= { Loginstyles.formRegisterText }>Hazlo ahora</Text>
            </TouchableOpacity>
            
          </View>
        </View>
          </ ScrollView>
        </View>
    </View>
  )
}
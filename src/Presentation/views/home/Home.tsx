import React, { useState, useEffect } from 'react'
import { Image, Text, View, TextInput, ToastAndroid, StyleSheet, TouchableOpacity,  } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';
import { CustomTextInput } from '../../components/CustomTextInput';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {};

export const HomeScreen = ({navigation, route}: Props) => {
    
    const { email, password, errorMessage, onChange, login, user } = useViewModel();

    useEffect(() => {
      if(errorMessage !== '') {
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
    }, [errorMessage])
    
    useEffect(() => {
      if(user?.id !== null && user?.id !== undefined) {
        if (user.roles?.length! > 1) {
            navigation.replace('RolesScreen');
        }
        else{
            navigation.replace('ProfileInfoScreen');
        }
        
      }
    }, [user])
    

    return (
    <View style={styles.container}>
        <Image
            source={ require('../../../../assets/chef.jpg') } 
            style= {styles.imageBackground}
        />

        <View style={ styles.form }>

            <Text style={ styles.formText }>Iniciar Sesión</Text>

            <CustomTextInput
                image={ require('../../../../assets/email.png') }
                placeholder='ejemplo@gmail.com'
                KeyboardType='email-address'
                property='email'
                onChangeText={ onChange }
                value={ email }
            />

            <CustomTextInput
                image={ require('../../../../assets/lock.png') }
                placeholder='***********'
                KeyboardType='default'
                property='password'
                onChangeText={ onChange }
                value={ password }
                secureTextEntry={ true }
            />

            <View style= {{ marginTop: 30 }}>
                <RoundedButton text='INGRESAR' onPress={ () => login()}/>
        </View>

        <View style= { styles.formRegister }>
            <Text>¿No estás registrado?</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
                <Text style= { styles.formRegisterText }>Hazlo ahora</Text>
            </TouchableOpacity>
            
        </View>

        </View>

        <View style={ styles.logoContainer }>
            <Image
                source={ require('../../../../assets/logo.png') }
                style={ styles.logoImage }
            />

            <Text style={ styles.logoText }>Vuelta al menu en 365 platos</Text>
        </View>
    </View>
    );
}






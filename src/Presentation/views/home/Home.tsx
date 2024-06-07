import React, {useEffect, useState} from 'react'
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../../Presentation/theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'


export const HomeScreen = () => {

    const {email, password, onChange, login, errorMessage, user} = useViewModel();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
            
        }
    }, [errorMessage])

    useEffect(() => {
      if(user?.id !== null && user?.id !== undefined && user?.id !== ''){
        if(user.roles?.length! > 1){
            navigation.replace('RolesScreen');
        }
        else{
            navigation.replace('ClientTabsNavigator');
        }
      }
    }, [user])
    
    
    
    
    const navigation= useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.LoginScreen}>
            <Image
            source={require('../../../../assets/cocinero.png') } 
            style={ styles.ImageBackground}
            />

            <View style={styles.logoLoginImage}>
            <Image
                source={require('../../../../assets/platos y cubiertos.png')}
                
                />

                <Text style={styles.logoLoginText}>VUELTA AL MENU EN 365 PLATOS</Text>
            </View>

            <View style={styles.form}>

            <Text style={styles.formCenterText}>Iniciar Sesion</Text>

            <CustomTextInput
                image ={require('../../../../assets/icono correo.png')}
                placeholder='Example@gmail.com'
                keyboardType='email-address'
                property='email'
                onChangeText={onChange}
                value={email}
            />

            <CustomTextInput
                image ={require('../../../../assets/icono contraseña.png')}
                placeholder='********'
                keyboardType='default'
                property='password'
                onChangeText={onChange}
                value={password}
                secureTextEntry= {true}
            />

            <View style={{marginTop: 20}}>
            
            <RoundedButton text='INGRESAR' onPress={() =>login ()} />

            </View>

            <View style={styles.formHelp}>
                <Text>No tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.formHelpText}>Registrate</Text>
                </TouchableOpacity>
            </View>
            
            </View>

            
        </View>
    );
}
    

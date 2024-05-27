import React, {useState} from 'react'
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../../Presentation/theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'

export const HomeScreen = () => {

    const {email, password, onChange} = useViewModel();
    
    
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

            <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={require('../../../../assets/icono correo.png')}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder='Example@gmail.com' 
                keyboardType='email-address'
                value={ email}
                onChangeText={ text => onChange('email', text)}
                />
            </View>

            <View style={styles.formPasswordInput}>
            <Image
                style={styles.formIconPassword  }
                source={require('../../../../assets/icono contraseña.png')}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder='********' 
                keyboardType='default'
                secureTextEntry= {true}
                value={ password}
                onChangeText={ text => onChange('password', text)}
                />
            </View>

            <View style={{marginTop: 20}}>
            
            <RoundedButton text='INGRESAR' onPress={() => {
                console.log('Email:' + email);
                console.log('Password:' + password);
            }} />

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
    
const styles = StyleSheet.create({
    LoginScreen: {
        flex: 1,
        backgroundColor: 'black',
    },

    ImageBackground: {
        width: '100%',
        height: '65%',
    },

    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

    logoLoginImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        borderRadius: 50,
        marginBottom: 10


    },

    logoLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },

    formCenterText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        padding: 15,
    },

    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#white',
        marginLeft: 20
    },

    formMailInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formIconMail: {
        width: 40,
        height: 40,
        marginLeft: 5
    },

    formIconPassword: {
        width: 40,
        height: 40,
        marginLeft: 5
    },

    formPasswordInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formHelp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

    },

    formHelpText: {
        color: MyColors.primary
    }
});

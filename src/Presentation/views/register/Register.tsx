import React from 'react'
import { Image, Text, View, TextInput, ToastAndroid, StyleSheet, TouchableOpacity,  } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';

export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange, register } = useViewModel();

    return (
        <View style={styles.container}>
            <Image
                source={ require('../../../../assets/chef.jpg') } 
                style= {styles.imageBackground}
            />
    
            <View style={ styles.form }>

            <CustomTextInput
                placeholder='Nombres'
                KeyboardType='default'
                image={ require('../../../../assets/user.png') }
                property='name'
                onChangeText={ onChange }
                value={ name }
            />

            <CustomTextInput
                placeholder='Apellidos'
                KeyboardType='default'
                image={ require('../../../../assets/user.png') }
                property='lastname'
                onChangeText={ onChange }
                value={ lastname }
            />

            <CustomTextInput
                placeholder='ejemplo@gmail.com'
                KeyboardType='email-address'
                image={ require('../../../../assets/email.png') }
                property='email'
                onChangeText={ onChange }
                value={ email }
            />

            <CustomTextInput
                placeholder='Teléfono'
                KeyboardType='numeric'
                image={ require('../../../../assets/phone.png') }
                property='phone'
                onChangeText={ onChange }
                value={ phone }
            />

            <CustomTextInput
                placeholder='Contraseña'
                KeyboardType='default'
                image={ require('../../../../assets/lock.png') }
                property='password'
                onChangeText={ onChange }
                value={ password }
                secureTextEntry={ true }
            />
        
            <CustomTextInput
                placeholder='Confirmar contraseña'
                KeyboardType='default'
                image={ require('../../../../assets/lock.png') }
                property='confirmPassword'
                onChangeText={ onChange }
                value={ confirmPassword }
                secureTextEntry={ true }
            />
      
                <View style= {{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={ () => register() }/>
                </View>
    
            </View>
    
            <View style={ styles.logoContainer }>
                <Image
                    source={ require('../../../../assets/user_image.png') }
                    style={ styles.logoImage }
                />
    
                <Text style={ styles.logoText }>SELECCIONE UNA IMAGEN</Text>
            </View>
        </View>
    );
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form:{
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    formIcon: {
        width: 30,
        height: 30
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        backgroundColor: MyColors.primary,
        borderWidth: 1,
        borderColor: MyColors.primary,
        borderRadius: 50, 
        color: 'white', 
        marginLeft: 10
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15, 
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: MyColors.primary,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center', 
        top: '4%'
    },
    logoImage: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },

});



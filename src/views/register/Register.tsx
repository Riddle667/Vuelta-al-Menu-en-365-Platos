import React from 'react'
import { Image, Text, View, TextInput, ToastAndroid, StyleSheet, TouchableOpacity,  } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={ require('../../../assets/chef.jpg') } 
                style= {styles.imageBackground}
            />
    
            <View style={ styles.form }>
    
            <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/user.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput }
                        placeholder= 'Nombres'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='default'
                    />
                </View>

                <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/user.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput }
                        placeholder= 'Apellidos'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='default'
                    />
                </View>

                <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/email.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput }
                        placeholder= 'ejemplo@gmail.com'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='email-address'
                    />
                </View>

                <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/phone.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput } 
                        placeholder= 'Teléfono'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='numeric'
                    />
                </View>
        
                <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/lock.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput }
                        placeholder= 'Contraseña'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='default'
                        secureTextEntry= {true}
                    />
                </View>

                <View style= {styles.formInput }>
                    <Image
                        style= { styles.formIcon }
                        source={ require('../../../assets/lock.png') }
                    />
                    <TextInput
                        style={ styles.formTextInput }
                        placeholder= 'Confirmar contraseña'
                        placeholderTextColor= '#FFFFFF'
                        textAlign= 'center'
                        keyboardType='default'
                        secureTextEntry= {true}
                    />
                </View>

        
                <View style= {{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={ () => ToastAndroid.show('HOLA', ToastAndroid.SHORT) }/>
                </View>
    
            </View>
    
            <View style={ styles.logoContainer }>
                <Image
                    source={ require('../../../assets/user_image.png') }
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



import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { MyColors } from '../../../Presentation/theme/AppTheme';

export const RegisterScreen = () => {

   return (
      <View style={styles.LoginScreen}>
          <Image
          source={require('../../../../assets/cocinero.png') } 
          style={ styles.ImageBackground}
          />

          <View style={styles.logoLoginImage}>
            <Image
                source={require('../../../../assets/Imagen.png')}
                />

              <Text style={styles.logoLoginText}>Seleccione una imagen</Text>
          </View>


          <View style={styles.form}>

          <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={require('../../../../assets/Usuario.png')}
                />
            <TextInput
            style={styles.formTextInput}
                placeholder='Nombre' 
                keyboardType='default'
                />
            </View>
            
            <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={require('../../../../assets/Usuario.png')}
                />
            <TextInput
            style={styles.formTextInput}
                placeholder='Apellido' 
                keyboardType='default'
                />
            </View>

            <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={require('../../../../assets/Telefono.png')}
                />
            <TextInput
            style={styles.formTextInput}
                placeholder='Telefono' 
                keyboardType='default'
                />
            </View>

            

            <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={require('../../../../assets/icono correo.png')}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder='Example@gmail.com' 
                keyboardType='email-address'
                />
            </View>

            <View style={styles.formPasswordInput}>
            <Image
                style={styles.formIconPassword  }
                source={require('../../../../assets/icono contraseña.png')}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder='Contraseña' 
                keyboardType='default'
                secureTextEntry= {true}
                />
            </View>

            <View style={styles.formPasswordInput}>
            <Image
                style={styles.formIconPassword  }
                source={require('../../../../assets/icono contraseña.png')}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder='Confirmar Contraseña' 
                keyboardType='default'
                secureTextEntry= {true}
                />
            </View>

            <View style={{marginTop: 20}}>
            
            <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('HOLA', ToastAndroid.SHORT)} />

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
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

    logoLoginImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: '1%',
        borderRadius: 50,
        marginBottom: 10


    },

    logoLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 0,
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
        marginLeft: 10
    },

    formMailInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

    formIconMail: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginTop:-10
    },

    formIconPassword: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginTop:-10
    },

    formPasswordInput: {
        flexDirection: 'row',
        marginTop: 40,
    },

});


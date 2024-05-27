import React, { useState } from 'react'
import { Image, Text, View, TextInput, ToastAndroid, StyleSheet, TouchableOpacity,  } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
    <View style={styles.container}>
        <Image
            source={ require('../../../assets/chef.jpg') } 
            style= {styles.imageBackground}
        />

        <View style={ styles.form }>

            <Text style={ styles.formText }>Iniciar Sesión</Text>

        <View style= {styles.formInput }>
            <Image
                style= { styles.formIcon }
                source={ require('../../../assets/email.png') }
                />
                <TextInput
                style={ styles.formTextInput }
                placeholder='ejemplo@gmail.com'
                placeholderTextColor='#FFFFFF'
                textAlign='center'
                keyboardType='email-address'
                value={ email }
                onChangeText={ text => setEmail(text) }
            />
        </View>

        <View style= {styles.formInput }>
            <Image
                style= { styles.formIcon }
                source={ require('../../../assets/lock.png') }
            />
            <TextInput
                style={ styles.formTextInput }
                placeholder= '***********'
                placeholderTextColor= '#FFFFFF'
                textAlign= 'center'
                keyboardType='default'
                secureTextEntry= {true}
                value={ password }
                onChangeText={ text => setPassword(text) }
            />
        </View>

        <View style= {{ marginTop: 30 }}>
            <RoundedButton text='INGRESAR' onPress={ () => ToastAndroid.show('HOLA', ToastAndroid.SHORT) }/>
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
                source={ require('../../../assets/logo.png') }
                style={ styles.logoImage }
            />

            <Text style={ styles.logoText }>Vuelta al menu en 365 platos</Text>
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
        height: '40%',
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
        top: '15%'
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




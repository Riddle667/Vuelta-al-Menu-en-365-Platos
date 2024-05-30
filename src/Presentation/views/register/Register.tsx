import React from 'react'
import { Image, Text, View, ScrollView,  } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange, register } = useViewModel();

    return (
        <View style={styles.container}>
            <Image
                source={ require('../../../../assets/chef.jpg') } 
                style= {styles.imageBackground}
            />
    
        <View style={ styles.logoContainer }>
                <Image
                    source={ require('../../../../assets/user_image.png') }
                    style={ styles.logoImage }
                />
    
                <Text style={ styles.logoText }>SELECCIONE UNA IMAGEN</Text>
            </View>

            <View style={ styles.form }>

                <ScrollView>

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
    
                </ScrollView>

            </View>

        </View>
    );
}
        




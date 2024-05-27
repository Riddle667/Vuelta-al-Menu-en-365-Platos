import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    KeyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    KeyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (

    <View style= {styles.formInput }>
        <Image
            style= { styles.formIcon }
            source={ image }
            />
            <TextInput
            style={ styles.formTextInput }
            placeholder={ placeholder }
            placeholderTextColor='#FFFFFF'
            textAlign='center'
            keyboardType= { KeyboardType }
            value={ value }
            onChangeText={ text => onChangeText(property, text) }
            secureTextEntry= { secureTextEntry }
        />
    </View>

  )
}

const styles = StyleSheet.create({
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
})
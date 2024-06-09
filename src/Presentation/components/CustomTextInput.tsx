import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void,
    editable?: boolean,
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
    editable = true



}: Props) => {
  return (
    <View style={styles.formMailInput}>
            <Image
                style={styles.formIconMail}
                source={image}
                />

            <TextInput
            style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={ value}
                onChangeText={ text => onChangeText(property, text)}
                secureTextEntry = {secureTextEntry}
                editable = {editable}
                />
            </View>
  )
}

const styles = StyleSheet.create({
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
})

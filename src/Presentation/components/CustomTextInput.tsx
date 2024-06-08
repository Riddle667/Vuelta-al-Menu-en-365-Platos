import React from 'react';
import { View, Image, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { MyColors } from '../theme/AppTheme';
import { Product } from '../../Domain/entities/Product';

interface Props {
    image: any;
    placeholder: string;
    value: string;
    KeyboardType: TextInputProps['keyboardType'];
    secureTextEntry?: boolean;
    property: keyof Product;  // Usar keyof Product aquí
    onChangeText: (property: keyof Product, value: string) => void;
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    KeyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
    ...rest
}: Props) => {
  return (
    <View style={styles.formInput}>
        <Image
            style={styles.formIcon}
            source={image}
        />
        <TextInput
            style={styles.formTextInput}
            placeholder={placeholder}
            placeholderTextColor='#FFFFFF'
            textAlign='center'
            keyboardType={KeyboardType}
            value={value}
            onChangeText={text => onChangeText(property, text)}
            secureTextEntry={secureTextEntry}
            {...rest}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    formIcon: {
        width: 30,
        height: 30,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    formTextInput: {
        flex: 1,
        backgroundColor: MyColors.primary,
        borderWidth: 1,
        borderColor: MyColors.primary,
        borderRadius: 50,
        color: 'white',
        marginLeft: 10,
    },
});

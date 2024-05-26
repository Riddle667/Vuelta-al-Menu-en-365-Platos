import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
    text: string
}

export const RoundedButton = ({ text }: Props) => {
    return (

        <TouchableOpacity
            style={ styles.roundedButton }
            onPress={() => {}}
        >
            <Text style={ styles.textButton }>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    roundedButton: {
        width: '80%',
        height: 40,
        backgroundColor: '#FF4141',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 40
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
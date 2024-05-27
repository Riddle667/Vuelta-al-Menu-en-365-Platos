import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props {
    text: string,
    onPress: () => void
}

export const RoundedButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => onPress()}
    >
        <Text style={styles.textButtonLogin}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    roundedButton : {
        width: '100%',
        height: 40,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        fontSize: 20,
    },

    textButtonLogin: {
        color: MyColors.background,
        fontWeight: 'bold'
    }
});
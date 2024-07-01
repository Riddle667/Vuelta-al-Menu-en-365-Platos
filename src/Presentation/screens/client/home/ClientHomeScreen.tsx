import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const ClientHomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Bienvenido!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('ProductListScreenClient')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/product-icon.png')}
            />
            <Text style={styles.adminButtonText}>Listar Productos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        </View>
        <View style={ styles.divisor}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('ChangePasswordScreenClient')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/password-icon.png')}
            />
            <Text style={styles.adminButtonText}>Cambiar Contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
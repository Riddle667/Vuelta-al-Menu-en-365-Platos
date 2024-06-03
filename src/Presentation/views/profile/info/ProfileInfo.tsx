import React from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import useViewModel from './ViewModel'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles'
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';




export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { removeSession, user} = useViewModel();

  return (
    <View style = {styles.container}>

          <Image
            source={require('../../../../../assets/cocinero.png') } 
            style={ styles.ImageBackground}
          />

          <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            removeSession();
            navigation.replace('HomeScreen')
          }}>

            <Image
              source={require('../../../../../assets/cerrar-sesion.png') } 
              style={ styles.logout}
            />
            
          </TouchableOpacity>

          <View style={styles.logoLoginImage}>
            <Image
              source={{uri:user?.image}}
              style={styles.logoImage}
                
            />
          </View>

          <View style={styles.form}>
          <View style={styles.formInfoUser}>
              <Image
                source = {require('../../../../../assets/Usuario.png')}
                style={styles.formImage}
              />

              <View>
              <View style={styles.formContent}>
                <Text style={styles.formTextDescription}>Nombre de usuario</Text>

                <View style={styles.formRedBox}>
                  <Text style= {styles.formTextColor}>{user?.name}{user?.lastname}</Text>
                </View>

              </View>
              </View>
            </View>

            <View style={styles.formInfoUser}>
              <Image
                source = {require('../../../../../assets/Telefono.png')}
                style={styles.formImage}
              />

              <View>
              <View style={styles.formContent}>
                <Text style={styles.formTextDescription}>Teléfono</Text>

                <View style={styles.formRedBox}>
                  <Text style= {styles.formTextColor}>{user?.phone}</Text>
                </View>

              </View>
              </View>
            </View>

            <View style={styles.formInfoUser}>
              <Image
                source = {require('../../../../../assets/icono correo.png')}
                style={styles.formImage}
              />

              <View>
              <View style={{...styles.formContent,marginBottom:30, marginTop: 15}}>
                <Text style={styles.formTextDescription}>Correo electronico</Text>

                <View style={styles.formRedBox}>
                  <Text style= {styles.formTextColor}>{user?.email}</Text>
                </View>

              </View>
              </View>
            </View>

            <RoundedButton 
              onPress={()=>{
                navigation.navigate('ProfileUpdateScreen')
              }}
              text = 'EDITAR DATOS' />
            

          </View>
        </View>
  )
}




import React, { useEffect } from 'react'
import { Image, Text, ToastAndroid, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './Styles'
import UseViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import stylesMap from './StylesMap'
import { StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressMapScreen'>{}


export const ClientAddressMapScreen = ({navigation, route}:Props) => {

    const{messagePermissions, position, mapRef, name, latitude, longitude, onRegionChangeComplete} = UseViewModel()

    useEffect(() => {
      if (messagePermissions != '') {
        ToastAndroid.show(messagePermissions, ToastAndroid.LONG)
      }
    }, [])
    

  return (
    <View style = {styles.container}>
        <MapView
            ref={mapRef}
            customMapStyle={stylesMap}
            style = {{height: '100%', width: '100%'}}
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={(region) => {
              onRegionChangeComplete(region.latitude, region.longitude)
            }}
        />

        <Image
          style = {styles.imageLocation}
          source={require('../../../../../../assets/nombreDireccion.png')}
        />

        <View style={styles.refPoint}>
          <Text style={styles.refPointText}>{ name}</Text>
        </View>

        <View style = {styles.refPointButton}>
          <RoundedButton
            text='Seleccionar un punto'
            onPress={() => {
              navigation.navigate({
                name: 'ClientAddressCreateScreen',
                merge:true,
                params: {refPoint: name, latitude:latitude, longitude:longitude}
              })
            }}

          />
        </View>
    </View>
  )
}



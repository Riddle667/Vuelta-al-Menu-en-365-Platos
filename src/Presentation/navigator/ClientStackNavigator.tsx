import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientAddressListScreen } from "../views/client/address/list/AddressList";
import { Image, TouchableOpacity } from "react-native";
import { ClientAddressCreateScreen } from "../views/client/address/create/AddressCreate";
import { ClientAddressMapScreen } from "../views/client/address/map/AddressMap";

export type ClientStackParamList = {
    ClientAddressListScreen : undefined;
    ClientAddressCreateScreen: {refPoint: string, latitude: number, longitude: number} | undefined
    ClientAddressMapScreen: undefined

}

const Stack = createNativeStackNavigator<ClientStackParamList>()

export const ClientStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name='ClientAddressListScreen'
            component={ ClientAddressListScreen }
            options={ ({route, navigation}) => (
              {
                headerShown: true,
                title: 'Mis Direcciones',
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('ClientAddressCreateScreen')}>
                    <Image 
                      source={ require('../../../assets/boton-mas.png') }
                      style={{ width:30, height: 30 }}
                    />
                  </TouchableOpacity>
                )
              }
            )}
        />

        <Stack.Screen 
          name='ClientAddressCreateScreen'
          component={ ClientAddressCreateScreen }
          options={{
            title: 'Nueva direccion',
            headerShown: true
          }}
        />

        <Stack.Screen 
          name='ClientAddressMapScreen'
          component={ ClientAddressMapScreen }
          options={{
            title: 'Ubica tu nueva direccion en el mapa',
            headerShown: true
          }}
        />
        </Stack.Navigator>
    )
}
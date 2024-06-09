import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/Presentation/views/roles/Roles';
import { ProductScreen } from './src/Presentation/views/products/create/Product';
import { ProductListScreen } from './src/Presentation/views/products/list/ProductList';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined,
  RolesScreen: undefined,
  ProductScreen: undefined,
  ProductListScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />
        
        <Stack.Screen 
          name="ProductListScreen" 
          component={ ProductListScreen }
          options={{
            headerShown: true,
            title: 'Productos'
          }}
        />

        <Stack.Screen 
          name="ProductScreen" 
          component={ ProductScreen }
          options={{
            headerShown: true,
            title: 'Crear Producto'
          }}
        />

        
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
          options={{
            headerShown: true,
            title: 'Nuevo usuario'
          }}
        />

        <Stack.Screen 
          name="ProfileInfoScreen" 
          component={ProfileInfoScreen} 
        />

        <Stack.Screen 
          name="RolesScreen" 
          component={RolesScreen} 
          options={{
            headerShown: true,
            title: 'Selecciona tu rol'
          }}
        />

        



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
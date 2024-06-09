import React from 'react';
import { User } from '../../Domain/entities/User';
import { RegisterScreen } from '../../../src/Presentation/views/register/Register';
import { HomeScreen } from '../../../src/Presentation/views/home/Home';
import { RolesScreen } from '../../../src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from '../../../src/Presentation/navigator/AdminTabsNavigator';
import { ClientTabsNavigator } from '../../../src/Presentation/navigator/ClientTabsNavigator';
import { ProfileUpdateScreen } from '../../../src/Presentation/views/profile/update/ProfileUpdate';
import { UserProvider } from '../../../src/Presentation/context/UserContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClientAddressListScreen } from '../views/client/address/list/AddressList'; 
import { ClientCategoryListScreen } from '../views/client/category/list/CategoryList';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RolesScreen: undefined,
  AdminTabsNavigator: undefined,
  ClientTabsNavigator: undefined,
  ProfileUpdateScreen: { user: User },
  CategoryList: undefined,
  ClientAddressListScreen: undefined,
  ClientCategoryListScreen: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <UserState>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
          options={{
            headerShown: true,
            title: ''
          }}
        />
        <Stack.Screen 
          name="RolesScreen" 
          component={RolesScreen} 
          options={{
            headerShown: true,
            title: 'Seleccione un rol'
          }}
        />
        <Stack.Screen
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
        />
        <Stack.Screen
          name="ClientTabsNavigator"
          component={ClientTabsNavigator}
        />
        <Stack.Screen
          name="ProfileUpdateScreen"
          component={ProfileUpdateScreen}
          options={{
            headerShown: true,
            title: ''
          }}
        />
        <Stack.Screen
          name="ClientCategoryListScreen"
          component={ClientCategoryListScreen}
        />
        <Stack.Screen
          name="ClientAddressListScreen"
          component={ClientAddressListScreen}
        />
      </Stack.Navigator>
    </UserState>
  )
};

const UserState = ({ children }: any) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
};

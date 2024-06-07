import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { ClientTabsNavigator } from './src/Presentation/navigator/ClientTabsNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProfileUpdateScreen } from './src/Presentation/views/profile/update/ProfileUpdate';
import { User } from './src/Domain/entities/User';
import { UserProvider } from './src/Presentation/context/UserContext';



export type RootStackParamList= {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RolesScreen: undefined,
  AdminTabsNavigator: undefined,
  ClientTabsNavigator: undefined,
  ProfileUpdateScreen: {user: User}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
          <Stack.Screen name="RegisterScreen" 
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

      </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({children}: any) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}

  export default App;
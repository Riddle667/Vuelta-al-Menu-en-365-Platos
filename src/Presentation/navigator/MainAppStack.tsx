import { createStackNavigator } from '@react-navigation/stack';


import { useContext } from 'react';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { AuthContext } from '../context/auth/AuthContext';
import { AdminBottomTabs } from './tabs/admin/AdminBottomTabs';
import LoadingScreen from '../screens/LoadingScreen';


export type RootStackParamsList = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  AdminBottomTabs: undefined,
  ClientBottomTabs: undefined
}

const Stack = createStackNavigator<RootStackParamsList>();

export const MainAppStack = () => {

  const {status, user} = useContext(AuthContext);

  if(status === 'checking') return <LoadingScreen />

  console.log(user);

  const renderRoleScreen = () => {
    if(user.role_id === 3){
      // this CLIENTE
    }else if (user.role_id === 2){
      //this Delivey
    } else {
      //this Admin

      return <>
        <Stack.Screen name='AdminBottomTabs' component={ AdminBottomTabs} />
      </>
    
    }
  }
  return (
    <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{
            headerShown: false
        }}
    >
      <>
        {
          (status !== 'authenticated') ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : renderRoleScreen()
        }
      </>

      

    </Stack.Navigator>
  );
}
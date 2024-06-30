import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { AdminHomeScreen } from '../screens/admin/home/AdminHomeScreen';
import { CreateCategoryScreen } from '../screens/admin/category/create/CreateCategoryScreen'
import { ListCategoriesScreen } from '../screens/admin/category/list/ListCategoriesScreen'

export type RootStackParamsList = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  AdminHomeScreen: undefined,
  AdminBottomTabs: undefined,
  CreateCategoryScreen: undefined,
  ListCategoriesScreen: undefined
  ClientBottomTabs: undefined
}

const Stack = createStackNavigator<RootStackParamsList>();

export const MainAppStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      <Stack.Screen name="CreateCategoryScreen" component={CreateCategoryScreen} />
      <Stack.Screen name="ListCategoriesScreen" component={ListCategoriesScreen} />

    </Stack.Navigator>
  );
}
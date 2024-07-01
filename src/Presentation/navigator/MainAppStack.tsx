import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { AdminHomeScreen } from '../screens/admin/home/AdminHomeScreen';
import { CreateCategoryScreen } from '../screens/admin/category/create/CreateCategoryScreen'
import { ListCategoriesScreen } from '../screens/admin/category/list/ListCategoriesScreen'
import { ChangePasswordScreen } from '../screens/common/change_password/ChangePasswordScreen'
import { CreateProductScreen } from '../screens/admin/product/create/CreateProductScreen'
import { ListProductsScreen } from '../screens/admin/product/list/ListProductsScreen'
import { ClientHomeScreen }  from '../screens/client/home/ClientHomeScreen'
import { ProductListScreenClient} from '../screens/client/product_list/ProductListScreenClient'
import { ShoppingCartScreen }   from '../screens/client/shopping_cart/ShoppingCartScreen'

export type RootStackParamsList = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  AdminHomeScreen: undefined,
  AdminBottomTabs: undefined,
  CreateCategoryScreen: undefined,
  ListCategoriesScreen: undefined
  ClientBottomTabs: undefined,
  ChangePasswordScreen: undefined,
  CreateProductScreen: undefined,
  ListProductsScreen: undefined
  ClientHomeScreen: undefined
  ProductListScreenClient: undefined,
  ShoppingCartScreen: undefined
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
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name="CreateProductScreen" component={CreateProductScreen} />
      <Stack.Screen name="ListProductsScreen" component={ListProductsScreen} />
      <Stack.Screen name="ClientHomeScreen" component={ClientHomeScreen} />
      <Stack.Screen name="ProductListScreenClient" component={ProductListScreenClient} />
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
}
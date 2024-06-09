import { Text, TouchableOpacity } from 'react-native';
import { LoginScreen } from './src/Presentation/screens/login/LoginScreen.tsx';
import { RegisterScreen } from './src/Presentation/screens/register/RegisterScreen.tsx';
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminHomeScreen } from './src/Presentation/screens/admin/home/AdminHomeScreen';
import { ChangePasswordScreen } from './src/Presentation/screens/common/change_password/ChangePasswordScreen.tsx';
import { CreateCategoryScreen } from './src/Presentation/screens/admin/category/create/CreateCategoryScreen.tsx';
import { VisualizeProductDetailScreen } from './src/Presentation/screens/client/visualize_product_detail/VisualizeProductDetailScreen.tsx';
import { ProductListScreen } from './src/Presentation/screens/client/product_list/ProductListScreen.tsx'; 
import FlashMessage from "react-native-flash-message";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const CustomBackButton = ({navigation}) => {  
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 20}}>
      <Ionicons name="arrow-back" size={24} color="black"></Ionicons>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    // <LoginScreen/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LoginScreen}
        screenOptions={({ navigation, route }) => ({
          headerTitle: "",
          headerLeft: route.name != "LoginScreen" ? () => <CustomBackButton navigation={navigation}/> : "",
        })}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />      
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />      
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />   
        <Stack.Screen name="CreateCategoryScreen" component={CreateCategoryScreen} />   
        <Stack.Screen name="VisualizeProductDetailScreen" component={VisualizeProductDetailScreen} />   
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />   
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
import React from 'react'
import { Category } from '../../Domain/entities/Category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryProvider } from '../context/CategoryContext';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdateScreen } from '../views/admin/category/update/CategoryUpdate';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { Image, TouchableOpacity } from 'react-native';

export type CategoryStackParamList = {
    AdminCategoryListScreen:   undefined,
    AdminCategoryCreateScreen: undefined,
    AdminCategoryUpdateScreen: {category: Category}
}

const Stack = createNativeStackNavigator<CategoryStackParamList>();

const AdminCategoryNavigator = () => {
  return (
    <CategoryState>

        <Stack.Navigator screenOptions={{
        headerShown: false
        
        }}>

        <Stack.Screen
          name="AdminCategoryListScreen"
          component={AdminCategoryListScreen}
          options={({route, navigation}) => (
        {
          title: 'Categorias',
          tabBarLabel: 'Categorias',
          headerShown: true,
          tabBarIcon: () => (
  
            <Image
              source ={require('../../../assets/categoria admin.png')}
              style={{width: 40, height:40}}
              />
           ),
           headerRight: () => (
            <TouchableOpacity onPress={ () => navigation.navigate('AdminCategoryCreateScreen')}>
              <Image
                source = {require('../../../assets/boton-mas.png')}
                style = {{width: 35, height:35, marginRight: 20, marginTop: 5 }}
              />
            </TouchableOpacity>
           )
        }
      )}
          
        />

        <Stack.Screen
          name="AdminCategoryCreateScreen"
          component={AdminCategoryCreateScreen}
          options={{
            headerShown: true,
            title: 'Nueva categoria'
          }}
        />

         <Stack.Screen
          name="AdminCategoryUpdateScreen"
          component={AdminCategoryUpdateScreen}
          options={{
            headerShown: true,
            title: 'Editar Categoria'
          }}
        />
        </Stack.Navigator>
        
    </CategoryState>
  )
}

const CategoryState = ({children}: any) => {
    return (
      <CategoryProvider>
        {children}
      </CategoryProvider>
    )
}

export default AdminCategoryNavigator

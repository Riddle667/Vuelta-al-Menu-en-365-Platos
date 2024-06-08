import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainStackNavigator';
import AdminCategoryNavigator from './AdminCategoryNavigator';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator<RootStackParamList>();


export const AdminTabsNavigator = () => {
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
      name="AdminCategoryNavigator" 
      component={AdminCategoryNavigator} 
      options={({route, navigation}) => (
        {
          title: 'Categorias',
          tabBarLabel: 'Categorias',
          headerShown: false,
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
      <Tab.Screen 
      name="AdminOrderList" 
      component={AdminOrderListScreen} 
      options={{
        title: 'Pedidos',
        tabBarLabel: 'Pedidos',
        tabBarIcon: ({color}) => (

          <Image
            source ={require('../../../assets/reloj.png')}
            style={{width: 40, height:40}}
            />
         )
      }}
      
      />

      <Tab.Screen 
      name="ProfileInfoScreen" 
      component={ProfileInfoScreen} 
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        headerShown: false,
        tabBarIcon: ({color}) => (

          <Image
            source ={require('../../../assets/Perfil Tab.png')}
            style={{width: 40, height:40}}
            />
         )
      }}
      />
    </Tab.Navigator>
  );
};


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="AdminCategoryList" 
      component={AdminCategoryListScreen} 
      options={{
        title: 'Categorias',
        tabBarLabel: 'Categorias',
        tabBarIcon: ({color}) => (

          <Image
            source ={require('../../../assets/categoria admin.png')}
            style={{width: 40, height:40}}
            />
         )
      }}
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
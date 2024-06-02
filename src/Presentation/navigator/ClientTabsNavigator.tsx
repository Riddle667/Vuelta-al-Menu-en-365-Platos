import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { ClientCategoryListScreen } from '../views/client/category/list/CategoryList';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="ClientCategoryListScreen" 
      component={ClientCategoryListScreen} 
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
      name="ClientOrderListScreen" 
      component={ClientOrderListScreen} 
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

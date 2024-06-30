import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome } from "@expo/vector-icons";
import { ProfileInfoScreen } from "../../../screens/profile/info/ProfileInfoScreen";
import { AdminCategoryNavigator } from "./AdminCategoryNavigator";


export type RootAdminBottomTabsParamsList = {
    ProfileInfoScreen: undefined,
    AdminCategoryNavigator: undefined,
    AdminPaymentScreen:undefined,
}

const Tab = createBottomTabNavigator<RootAdminBottomTabsParamsList>();

export const AdminBottomTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="AdminCategoryNavigator"
            screenOptions={
                {
                    headerShown: false,
                    tabBarActiveBackgroundColor: 'black',
                    tabBarInactiveBackgroundColor: 'black',
                }
            }
        >
            <Tab.Screen name='ProfileInfoScreen' component={ProfileInfoScreen} options={{ tabBarShowLabel: false, tabBarIcon: ({size, color}) => <FontAwesome name="user" size={size} color="white" /> }} />
            
        </Tab.Navigator>
    )
}
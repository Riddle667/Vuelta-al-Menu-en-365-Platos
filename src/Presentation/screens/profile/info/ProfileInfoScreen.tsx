import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../navigator/MainAppStack";
import { Text, View } from "react-native";


interface Props extends StackScreenProps<RootStackParamsList, 'AdminBottomTabs'> {};



export const ProfileInfoScreen = ({navigation, route}: Props) => {

    return (
        <View>
            <Text>Profile Info Screen</Text>
        </View>
    )

}
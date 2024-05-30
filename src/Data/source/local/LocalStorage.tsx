import AsyncStorage from "@react-native-async-storage/async-storage"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const LocalStorage = () => {

    const save = async(key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('ERROR EN EL STORAGE' + error)
        }
    }

    const getItem = async(key: string) => {
        try {
            const item = await AsyncStorage.getItem(key);
            return item;

        } catch (error) {
            console.log('ERROR EN EL STORAGE' + error)
        }
    }


    const remove = async(key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log('ERROR EN EL STORAGE' + error)
        }
    }

    return{
        save,
        getItem,
        remove
    }
}
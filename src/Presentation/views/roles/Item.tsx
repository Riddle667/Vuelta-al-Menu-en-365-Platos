import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Rol } from '../../../Domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props {
  rol: Rol;
  height: number;
  width: number;
  navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

export const RolesItem = ({ rol, height, width, navigation }: Props) => {
  return (
    <TouchableOpacity
    onPress= {()=>{
      if (rol.name == 'ADMIN') {
        navigation.replace('AdminTabsNavigator')
      }
      else if (rol.name == 'CLIENTE') {
        navigation.replace('ClientTabsNavigator')
      }
    }}
    style= {{...styles.container, height: height, width:width}}>
    
      <View style={styles.imageContainer}>
        <Image
        style={styles.image}
          source={{ uri: rol.image }}
        />
        <View style={styles.titleContainer}>
          <Text style = {styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingHorizontal: 7,
    },

    imageContainer: {
        flex: 1,
        backgroundColor:'white',
        borderRadius: 20
    },

    titleContainer: {
        height:50,
        backgroundColor: MyColors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: 'white'
    },

    image: {
        flex:1,
        resizeMode: 'contain'
    }
})
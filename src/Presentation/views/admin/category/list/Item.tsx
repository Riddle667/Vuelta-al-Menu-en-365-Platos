import React from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../navigator/MainStackNavigator'
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator'


interface Props{
    category: Category
    remove: (id: string) => void
}


export const AdminCategoryListItem = ({category, remove}: Props) => {

    const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>();

  return (

    <TouchableOpacity>
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri:category.image}}
            />

        <View style = {styles.info}>
            <Text style = {styles.title}>{category.name}</Text>
            <Text style = {styles.description}>{category.description}</Text>
        </View>


        <View style = {styles.actionContainer}>
        <TouchableOpacity
            onPress={()=> navigation.navigate('AdminCategoryUpdateScreen', {category: category})}
        >
                <Image 
                    style = {styles.imageEdit}
                    source ={require('../../../../../../assets/boligrafo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => remove(category.id!)}>
                <Image 
                    style = {styles.imageEdit}
                    source ={require('../../../../../../assets/basurero.png')}
                />
            </TouchableOpacity>
        </View>

    </View>

    <View style={styles.divider}> </View>
    </TouchableOpacity>

    
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        height: 70,
        marginHorizontal: 20,
        marginTop:20
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 20
    },

    info: {
        marginLeft: 15,

    },
    title: {
        color: 'black',
        fontSize: 20
    },

    description: {
        color: 'gray',
        fontSize:15,
        marginTop:2
    },

    imageEdit: {
        width:25,
        height:25,
        marginVertical: 3

    },
    actionContainer:{
        marginRight:40
    },

    divider: {
        height:1,
        backgroundColor: '#666666',
        flex: 1,
        marginHorizontal: 20
    }


})

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';
import CustomButton from './CustomButton';
import { RootStackParamsList } from '../../../../../navigator/MainAppStack';

interface Props extends StackScreenProps<RootStackParamsList, 'AdminBottomTabs'> {}

const CategoryInfoScreen: React.FC<Props> = ({ navigation, route }) => {
    const { user, categories } = useViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>CATEGORIAS</Text>
            </View>
            <View style={styles.content}>
                <CustomButton
                    text="Agregar Categoría"
                    onPress={() => {
                        
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#FF4141',
        padding: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryInfoScreen;

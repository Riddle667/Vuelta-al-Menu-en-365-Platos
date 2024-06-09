import React from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import useProductViewModel from './ViewModel';
import ProductItem from './Item';
import { MyColors } from '../../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'ProductListScreen'> {};

export const ProductListScreen = ({ navigation }: Props) => {
    const { products, loading, errorMessage, fetchProducts } = useProductViewModel();

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color={MyColors.primary} />}
            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductItem
                            product={item}
                            onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}
                        />
                    )}
                    refreshing={loading}
                    onRefresh={fetchProducts}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
        padding: 10,
    },
    errorText: {
        color: MyColors.error,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ProductListScreen;

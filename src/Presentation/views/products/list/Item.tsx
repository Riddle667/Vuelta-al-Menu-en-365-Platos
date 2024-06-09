import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../../../../Domain/entities/Product';
import { MyColors } from '../../../theme/AppTheme';

interface Props {
    product: Product;
    onPress: () => void;
}

const ProductItem = ({ product, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: product.images[0] }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.productName}</Text>
                <Text style={styles.description}>{product.productDescription}</Text>
                <Text style={styles.price}>${product.productPrice}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
        backgroundColor: MyColors.secondary,
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: MyColors.primary,
    },
    description: {
        fontSize: 14,
        color: MyColors.primary,
    },
    price: {
        fontSize: 14,
        color: MyColors.primary,
        fontWeight: 'bold',
    },
});

export default ProductItem;

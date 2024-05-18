import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';

interface CategoryItemProps {
    item: {
        id: number;
        title: string;
        description: string;
        image: any;
        smallImages: any[];
    };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <View style={styles.smallImageContainer}>
                {item.smallImages.map((smallImage, index) => (
                    <Image key={index} source={smallImage} style={styles.smallImage} />
                ))}
            </View>
        </View>
    );
};

export default CategoryItem;

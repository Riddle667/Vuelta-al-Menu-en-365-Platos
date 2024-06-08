import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, ToastAndroid, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useViewModel from './ViewModel';  // Asegúrate de que la ruta sea correcta
import { CustomTextInput } from '../../components/CustomTextInput';
import { ModalPickImage } from '../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import styles from './Styles';  // Asegúrate de que la ruta sea correcta

interface Props extends StackScreenProps<RootStackParamList, 'ProductScreen'> {};

export const ProductScreen = ({ navigation, route }: Props) => {
    const {
        productName,
        productDescription,
        productPrice,
        images,
        loading,
        errorMessage,
        errors,
        user,
        onChange,
        register,
        pickImage,
        takePhoto
    } = useViewModel();
    
    const [modalVisible, setModalVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined) {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user]);

    const handleImageSelect = (index: number) => {
        setCurrentImageIndex(index);
        setModalVisible(true);
    };

    const handleImagePick = () => {
        pickImage(currentImageIndex);
        setModalVisible(false);
    };

    const handleTakePhoto = () => {
        takePhoto(currentImageIndex);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <View style={styles.ImageContainer}>
                    {images.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImageSelect(index)}>
                            <Image
                                source={image ? { uri: image } : require('../../../../assets/image_product.png')}
                                style={styles.logoImage}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <View>
                    <Text style={styles.logoText}>SELECCIONE UNA IMAGENES</Text>
                </View>
            </View>

            <View style={styles.form}>
                <ScrollView>
                    <CustomTextInput
                        placeholder='Nombre del producto'
                        KeyboardType='default'
                        image={require('../../../../assets/name_product.png')}
                        property='productName'
                        onChangeText={onChange}
                        value={productName}
                    />
                    {errors.productName && <Text style={styles.errorText}>{errors.productName}</Text>}

                    <CustomTextInput
                        placeholder='Descripción del producto'
                        KeyboardType='default'
                        image={require('../../../../assets/description.png')}
                        property='productDescription'
                        onChangeText={onChange}
                        value={productDescription}
                    />
                    {errors.productDescription && <Text style={styles.errorText}>{errors.productDescription}</Text>}

                    <CustomTextInput
                        placeholder='Precio del producto'
                        KeyboardType='number-pad'
                        image={require('../../../../assets/price.png')}
                        property='productPrice'
                        onChangeText={onChange}
                        value={productPrice}
                    />
                    {errors.productPrice && <Text style={styles.errorText}>{errors.productPrice}</Text>}

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR DATOS' onPress={() => register()} />
                    </View>
                </ScrollView>
            </View>

            <ModalPickImage
                openGallery={handleImagePick}
                openCamera={handleTakePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

            {loading && (
                <ActivityIndicator
                    style={styles.loading}
                    size="large"
                    color={MyColors.primary}
                />
            )}
        </View>
    );
};

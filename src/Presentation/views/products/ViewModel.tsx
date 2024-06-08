import React, { useState } from 'react';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { CreateProductUseCase } from '../../../Domain/useCases/userLocal/CreateProductUseCase';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepositoryImpl';
import { useUserLocal } from '../../hooks/useUserLocal';
import { Product } from '../../../Domain/entities/Product';

const productRepository = new ProductRepositoryImpl();
const createProductUseCase = new CreateProductUseCase(productRepository);

const ProductViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [values, setValues] = useState<Product>({
        productName: '',
        productDescription: '',
        productPrice: '',
        images: ['', '', ''],
    });
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset[]>([]);
    const { user, getUserSession } = useUserLocal();

    const pickImage = async (index: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            const newImages = [...values.images];
            newImages[index] = result.assets[0].uri;
            onChange('images', newImages);

            const newFiles = [...file];
            newFiles[index] = result.assets[0];
            setFile(newFiles);
        }
    }

    const takePhoto = async (index: number) => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            const newImages = [...values.images];
            newImages[index] = result.assets[0].uri;
            onChange('images', newImages);

            const newFiles = [...file];
            newFiles[index] = result.assets[0];
            setFile(newFiles);
        }
    }

    const onChange = (property: keyof Product, value: any) => {
        setValues({ ...values, [property]: value });
        setErrors({ ...errors, [property]: '' }); // Limpiar el error al cambiar el valor
    }

    const register = async () => {
        if (isValidForm()) {
            setLoading(true);
            try {
                await createProductUseCase.execute(values);
                setLoading(false);
                // Manejar el caso exitoso, por ejemplo, navegar a otra pantalla
            } catch (error) {
                setLoading(false);
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                } else {
                    setErrorMessage('An unexpected error occurred');
                }
            }
        }
    }

    const isValidForm = (): boolean => {
        let valid = true;
        let newErrors: { [key: string]: string } = {};

        if (values.productName === '') {
            newErrors.productName = 'El campo nombre del producto es requerido';
            valid = false;
        }
        if (values.productDescription === '') {
            newErrors.productDescription = 'El campo descripción del producto es requerido';
            valid = false;
        }
        if (values.productPrice === '') {
            newErrors.productPrice = 'El campo precio del producto es requerido';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    return {
        ...values,
        errors,
        onChange,
        register,
        pickImage,
        takePhoto,
        errorMessage,
        loading,
        user
    }
}

export default ProductViewModel;

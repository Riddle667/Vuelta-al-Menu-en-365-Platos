import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const ProductViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        images: ['', '', ''], // Inicializar con strings vacíos para cada ranura de imagen
        productName: '',
        productDescription: '',
        productPrice: '',
        password: '',
        confirmPassword: '',
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

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const register = async () => {
        if (isValidForm()) {
            setLoading(true);
            const response = await RegisterAuthUseCase(values);
            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));
            if (response.success) {
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            } else {
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.name === '') {
            setErrorMessage('El campo nombre es requerido');
            return false;
        }
        if (values.lastname === '') {
            setErrorMessage('El campo descripcion es requerido');
            return false;
        }
        if (values.email === '') {
            setErrorMessage('El campo precio es requerido');
            return false;
        }
        return true;
    }

    return {
        ...values,
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

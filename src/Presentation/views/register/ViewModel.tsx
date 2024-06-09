import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname:'',
        phone: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { user, getUserSession } = useUserLocal();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }

    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }

    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const register = async () => {
        if (isValidForm()) {
            setLoading(true);
            const response = await RegisterAuthUseCase(values);
            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));       
            if(response.success) {
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            }
            else{
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
            setErrorMessage('El campo apellido es requerido');
            return false;
            
        }
        if (values.email === '') {
            setErrorMessage('El campo correo electronico es requerido');
            return false;
            
        }
        if (values.phone === '') {
            setErrorMessage('El campo telefono es requerido');
            return false;
            
        }
        if (values.password === '') {
            setErrorMessage('El campo contraseña es requerido');
            return false;
            
        }
        if (values.confirmPassword === '') {
            setErrorMessage('El campo confirmar contraseña es requerido');
            return false;
            
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
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

export default RegisterViewModel

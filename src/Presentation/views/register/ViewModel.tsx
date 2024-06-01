import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname:'',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('RESULT: ' + JSON.stringify(response));       
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
        errorMessage
    }
}

export default RegisterViewModel

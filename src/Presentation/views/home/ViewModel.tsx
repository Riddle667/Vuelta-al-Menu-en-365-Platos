import React, { useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';

const HomeViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE: ' + JSON.stringify(response));
            if(!response.success) {
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = ():boolean => {
        if(values.email === '') {
            setErrorMessage('ingresa tu correo electrónico');
            return false;
        }

        if(values.password === '') {
            setErrorMessage('ingresa tu contraseña');
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage
        
    }
}

export default HomeViewModel;
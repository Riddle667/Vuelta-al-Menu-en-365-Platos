import React, { useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const { user, getUserSession } = useUserLocal();
    console.log('USUARIO DE SESION: ' + JSON.stringify(user));
    
    
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
            else {
                await SaveUserLocalUseCase(response.data);
                getUserSession();

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
        user,
        onChange,
        login,
        errorMessage
        
    }
}

export default HomeViewModel;
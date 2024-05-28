import React, {useState} from 'react'
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setvalues] = useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:''


    });

    const onChange = (property: string, value: any) => {
        setvalues({...values, [property]:value})
    }

    const register = async () => {
        if(isValidForm()) {
            const response = await RegisterAuthUseCase(values as any);
            console.log('EL RESULTADO ES' + JSON.stringify(response));

        }
    

    }
    const isValidForm =(): boolean => {
        if (values.name == '') {
            setErrorMessage('Debe ingresar un nombre')
            return false;
        }
        if (values.lastname == '') {
            setErrorMessage('Debe ingresar un apellido')
            return false;
        }
        if (values.phone == '') {
            setErrorMessage('Debe ingresar un telegono')
            return false;
        }
        if (values.email == '') {
            setErrorMessage('Debe ingresar un correo electronico')
            return false;
        }
        if (values.password == '') {
            setErrorMessage('Debe ingresar una contraseña')
            return false;
        }
        if (values.confirmPassword == '') {
            setErrorMessage('Debe ingresar una contraseña')
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('las contraseñas no son iguales')
            return false;
        }


        return true;
    }


    return {
        ...values,
        onChange,
        register,
        errorMessage,
        isValidForm
    }
}
export default RegisterViewModel;
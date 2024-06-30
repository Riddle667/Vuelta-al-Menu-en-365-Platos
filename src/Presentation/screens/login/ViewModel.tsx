import { useContext, useState } from "react";
import * as yup from 'yup';
import { LoginAuthUseCase } from "../../../Domain/useCases/Auth/LoginAuth";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserUseCase";
import { AuthContext } from "../../context/auth/AuthContext";
import { GetUserUseCase } from "../../../Domain/useCases/UserLocal/GetUserLocal";

interface Values{
    email: string,
    password: string
}

interface ResponseErrorData {
    path: string,
    value: string
}

const validationLoginSchema = yup.object().shape({
    email: yup.string().email('Ingrese un correo electronico válido').required('El correo es requerido'),
    password: yup.string().required('La contraseña es requerida')
});

const LoginViewModel = () => {


    const {auth}  = useContext(AuthContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

      

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

    const [errorResponse, setErrorResponse] = useState<ResponseErrorData[]>([]);

    const onChange = (field: string, value: string) => {
        setValues({...values,[field]: value
        });
    }

    const login = async () => {
        console.log(values)
        const isValid = await isValidForm();
        console.log(isValid);
        if (isValid) {
            try {
                const response = await LoginAuthUseCase(values.email, values.password);
                console.log(response);
                if (response.success) {
                    
                    await SaveUserUseCase(response.data);
                    auth(response.data);
                }  
            } catch (error) {
                console.log('Error: ', error);
            }
        } else {
            console.log('Formulario inválido');
        }
    }

    const isValidForm = async (): Promise<boolean> => {
        try {
            await validationLoginSchema.validate(values, {abortEarly: false});
            await setErrorMessages({});
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            });
            await setErrorMessages(errors);
            return false;
        }
    }

    return {
        ...values,
        onChange,
        setValues,
        login,
    }


}

export default LoginViewModel;

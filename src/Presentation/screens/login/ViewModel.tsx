import { useContext, useState } from "react";
import * as yup from 'yup';
import { LoginAuthUseCase } from "../../../Domain/useCases/Auth/LoginAuth";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserUseCase";
import { AuthContext } from "../../context/auth/AuthContext";
import { LocalStorage } from "../../../Data/sources/local/LocalStorage";

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

    const {save} = LocalStorage();
    const {auth}  = useContext(AuthContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    
    const [loginError, setLoginError] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
    const [errorResponse, setErrorResponse] = useState<ResponseErrorData[]>([]);

    const onChange = (field: string, value: string) => {
        setValues({...values,[field]: value
        });
    }

    const login = async (navigation) => {
        setLoginError("");
        console.log(values)
        const isValid = await isValidForm();
        console.log(isValid);
        if (isValid) {
            try {
                const response = await LoginAuthUseCase(values.email, values.password);
                console.log(response);
                console.log(response.data.role_id);
                save("rol", response.data.role_id.toString())
                setValues({email: '', password: ''});
                switch (response.data.role_id) {
                    case 1:
                        console.log("Administrador")
                        navigation.navigate("AdminHomeScreen");
                        break;
                    case 2:
                        console.log("Delibery")
                        break;
                    case 3:
                        console.log("Cliente")
                        navigation.navigate("ClientHomeScreen");
                        break;
                    default:
                        break;
                }
                if (response.success) {
                    auth(response.data);
                    // await SaveUserUseCase(response.data);
                    // auth
                }  
            } catch (error) {
                console.log('Error: ', error);
                setLoginError('Usuario o contraseña incorrectos');
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
        errorMessages,
        onChange,
        setValues,
        login,
        loginError
    }

}

export default LoginViewModel;

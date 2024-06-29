import { useState } from "react";
import * as yup from "yup";
import { User } from "../../../Domain/entities/User";
import { RegisterUserUseCase } from "../../../Domain/useCases/user/RegisterUserUseCase"
import { showMessage } from "react-native-flash-message";

interface Values{
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string
}

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    } as Values);

    const [errorsMessages, setErrorsMessages] = useState<Record<string, string>>({});

    const validationRegisterSchema = yup.object().shape({
        name: yup.string().required('El nombre es requerido'),
        lastname: yup.string().required('El apellido es requerido'),
        email: yup.string().email('Ingrese un correo electronico válido').required('El correo es requerido'),
        password: yup.string().required('La contraseña es requerida'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
        phone: yup.string().required('El teléfono es requerido')
    });

    const isValidForm = async (): Promise<boolean> => {
        console.log(values.password)
        console.log(values.confirmPassword)
        try {
            setErrorsMessages({});
            await validationRegisterSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            });
            setErrorsMessages(errors);
            return false;
        }
    }

    const onChange = (field: string, value: string) => {
        setValues({
            ...values, [field]: value
        });
    }

    const register = async(navigation) => {
        const isValid = await isValidForm();
        if (!isValid) {
            console.log(errorsMessages)
            return;
        }

        const user = {
            name: values.name,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            phone: values.phone
        } as User;

        try {
            const response = await RegisterUserUseCase(user)
            console.log("Response")
            console.log(response)
            navigation.navigate("LoginScreen")

        }catch (error) {
            console.log('Error desde view: ', error);
          showMessage({
            message: "Es posible que el correo ya esté registrado",
            type: "danger",
            icon: "danger"
          })
            console.log("mostgrando mensjae")
        }
    }

    return {
        ...values,
        errorsMessages,
        onChange,
        register,

    }

    
}

export default RegisterViewModel;
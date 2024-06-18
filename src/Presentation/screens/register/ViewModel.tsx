import { useState } from "react";

interface Values{
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
}

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        
    });

    const onChange = (field: string, value: string) => {
        setValues({...values,[field]: value
        });
    }

    const register = () => {
        console.log(values);   
    }

    return {
        ...values,
        onChange,
        register,
    }
}

export default RegisterViewModel;
import { useState } from "react";

interface Values{
    email: string,
    password: string
}


const LoginViewModel = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (field: string, value: string) => {
        setValues({...values,[field]: value
        });
    }

    const login = () => {
        console.log(values);
    }

    return {
        ...values,
        onChange,
        setValues,
        login,
    }


}

export default LoginViewModel;

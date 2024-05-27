import React, {useState} from 'react'

const RegisterViewModel = () => {

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

    const register = () => {
        console.log(JSON.stringify(values));
    }

    return {
        ...values,
        onChange,
        register
    }
}
export default RegisterViewModel;
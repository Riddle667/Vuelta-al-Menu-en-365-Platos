import React, {useState} from 'react'
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker'
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { userUserLocal } from '../../hooks/userUserLocal';


const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setvalues] = useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        image: '',
        password:'',
        confirmPassword:''
    });

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const {user, getUserSession} = userUserLocal();

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality:1 
        })

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async() => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality:1 
        })

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }


    const onChange = (property: string, value: any) => {
        setvalues({...values, [property]:value})
    }

    const register = async () => {
        if(isValidForm()) {
            setLoading(true);
            const response = await RegisterWithImageAuthUseCase(values as any, file!);
            setLoading(false)
            console.log('EL RESULTADO ES' + JSON.stringify(response));
            if (response.success) {
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            }
            else {
                setErrorMessage(response.message);
            }
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
            setErrorMessage('Debe ingresar un telefono')
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

        if (values.image === '') {
            setErrorMessage('Debe seleccionar una imagen')
            return false;
        }


        return true;
    }


    return {
        ...values,
        onChange,
        register,
        errorMessage,
        isValidForm,
        pickImage,
        takePhoto,
        user,
        loading
    }
}
export default RegisterViewModel;
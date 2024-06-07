import React, {useContext, useState} from 'react'
import { ApiDelivery } from '../../../../Data/source/remote/api/ApiDelivery';
import * as ImagePicker from 'expo-image-picker'
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { userUserLocal } from '../../../hooks/userUserLocal';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseAPIDelivery } from '../../../../Data/source/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';


const ProfileUpdateViewModel = (user: User) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessrMessage] = useState('');
    const [values, setvalues] = useState(user);
    const {getUserSession} = userUserLocal();
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const {saveUserSession} =  useContext (UserContext)

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

    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setvalues({ ...values, name, lastname, phone });
    };

    const update = async () => {
        if(isValidForm()) {
            setLoading(true);

            let response = {} as ResponseAPIDelivery
            // En el caso de guardar en nube o que no se guarde local cambiar a 'https://'
            if (values.image?.includes('file:')) { 
               const response = await UpdateUserUseCase(values);
            }
            else{
                const response = await UpdateWithImageUserUseCase(values, file!);

            }
            setLoading(false)
            console.log('EL RESULTADO ES' + JSON.stringify(response));
            if (response.success) {
                saveUserSession(response.data);
                setSuccessrMessage(response.message);
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



        return true;
    }


    return {
        ...values,
        onChange,
        update,
        errorMessage,
        isValidForm,
        pickImage,
        takePhoto,
        user,
        loading,
        onChangeInfoUpdate,
        successMessage
    }
}
export default ProfileUpdateViewModel;
import { useContext, useState } from "react";
import * as yup from "yup";
// import { ChangePasswordUserUseCase } from "../../../../Domain/useCases/user/ChangePasswordUserUseCase";
import { showMessage } from "react-native-flash-message";
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseAPIDelivery";
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from "../../../../../Domain/useCases/user/CreateCategoryUseCase";
// import RNFS from 'react-native-fs';

interface Values {
  name: string;
  description: string;
  image: string;
}

interface ResponseErrorData {
  path: string;
  value: string;
}

const CreateCategoryModel = () => {

  const [errorsMessages, setErrorMessages] = useState<Record<string, string>>({});

  const [errorsResponse, setErrosResponse] = useState<ResponseErrorData[]>([]);

  const [values, setvalues] = useState<Values>({
    name: "",
    description: "",
    image: ""
  });

  const onChange = (porperty: string, value: string) => {
    setvalues({ ...values, [porperty]: value });
  }

  const options = {
    mediaType: 'photo',
    quality: 0.5,
  }

  const selectImage = async(navigation) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      // const exists = await RNFS.exists(result.assets[0].uri);
      setvalues({ ...values, ["image"]: "data:image/png;base64," + result.assets[0].base64});
    } else {
      setvalues({ ...values, ["image"]: "123" });
    }
  }

  const CreateCategory = async(navigation) => {

    const isValid = await isValidForm();
    if(isValid){
      console.log("Es valido");
      try{
        const {...data} = values;
        const response = await CreateCategoryUseCase(data);
        if(response && response.success){
          showMessage({
            message: "Categoría creada correctamente",
            type: "success",
            icon: "success"
          })
          navigation.navigate("AdminHomeScreen");
        }
      }catch (error){
        console.log(error);
        console.log("Es posible que la categoría ya exista en la base de datos");
        const rejectErrors: ResponseAPIDelivery = error;
        setErrosResponse(rejectErrors.errors);    
        showMessage({
          message: "Es posible que la categoría ya exista en la base de datos",
          type: "danger",
          icon: "danger"
        })
        
      }
    }
  }

  const isValidForm = async (): Promise<boolean> => {
    try {
      await validationChangePasswordSchema.validate(values, {abortEarly: false});
      return true;
    } catch (error){
      const errors: Record<string, string> = {};
      // error.inner.forEach((error: yup.ValidationError) => {
      //   errors[error.path] = error.message;
      // });
      setErrorMessages(errors);
      console.log(errors);
      return false;
    }
  }

  const validationChangePasswordSchema = yup.object().shape({
    name: yup.string().required('EL nombres es requerido'),
    description: yup.string().required('La descripción es requerida'),
    image: yup.string().required('Es necesario subir una imagen'),
  });

  return{
    ...values,
    onChange,
    selectImage,
    CreateCategory,
    errorsMessages,
    errorsResponse,
  }

};

export default CreateCategoryModel; 

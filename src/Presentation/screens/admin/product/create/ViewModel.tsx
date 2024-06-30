import { useState } from "react";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseAPIDelivery";
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from "../../../../../Domain/useCases/user/CreateCategoryUseCase";
import { CreateProductUseCase } from "../../../../../Domain/useCases/user/CreateProductUseCase";
import { Product } from "../../../../../Domain/entities/Product";
import { isNumericLiteral } from "typescript";

interface ResponseErrorData {
  path: string;
  value: string;
}

const CreateCategoryModel = () => {

  const [errorsMessages, setErrorMessages] = useState<Record<string, string>>({});
  const [errorsResponse, setErrosResponse] = useState<ResponseErrorData[]>([]);
  const [values, setvalues] = useState<Product>({
    name: "",
    price: "",
    description: "",
    images: [],
    categoryIds: ""
  });

  const onChange = (porperty: string, value: string) => {
    if (porperty === "price") {
      validatePrice(value);
      return;
    }
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

    const image = new Array<string>();
    image.push("data:image/png;base64," + result.assets[0].base64); 

    console.log(result);
    if (!result.canceled) {
      setvalues({ ...values, ["images"]: image });
    } else {
      setvalues({ ...values, ["images"]: []});
    }
  }

  const createProduct = async(navigation: any) => {
    console.log("entrando");
    console.log("product: ")
    console.log(values)
    const isValid = await isValidForm();
    if(isValid){
      console.log("Es valido");
      try{
        const {...data} = values;
        const response = await CreateProductUseCase(data);
        if(response && response.success){
          console.log("if");
          showMessage({
            message: "Producto creada correctamente",
            type: "success",
            icon: "success"
          })
          navigation.navigate("AdminHomeScreen");
        }else{
          console.log("else");
          showMessage({
            message: "Error al crear el Producto",
            type: "danger",
            icon: "danger"
          })
        }
      }catch (error){
        console.log(error);
        console.log("Es posible que el Producto ya exista en la base de datos");
        const rejectErrors: ResponseAPIDelivery = error;
        setErrosResponse(rejectErrors.errors);    
        showMessage({
          message: "Es posible que el Producto ya exista en la base de datos",
          type: "danger",
          icon: "danger"
        })
      }
    }
  }

  const isValidForm = async (): Promise<boolean> => {
    try {
      await validationCreateProductSchema.validate(values, { abortEarly: false });
      setErrorMessages({});
      return true;
    } catch (error){
      const errors: Record<string, string> = {};
      error.inner.forEach((error: yup.ValidationError) => {
        errors[error.path] = error.message;
      });
      console.log("error");
      setErrorMessages(errors);
      return false;
    }
  }

  const validationCreateProductSchema = yup.object().shape({
    name: yup.string().required('EL nombres es requerido'),
    description: yup.string().required('La descripción es requerida'),
    images: yup.array().required('Es necesario subir una imagen'),
    price: yup.string().required('El precio es requerido'),
  });

  const validatePrice = (value: string) => {
    console.log("validando")
    console.log(!isNaN(parseInt(value)));
    if (!isNaN(parseInt(value))) {
      setvalues({ ...values, ["price"]: value });
    } else { 
      setvalues({ ...values, ["price"]: "" });
    }
  }

  return{
    ...values,
    onChange,
    selectImage,
    createProduct,
    errorsMessages,
    errorsResponse,
  }

};

export default CreateCategoryModel; 

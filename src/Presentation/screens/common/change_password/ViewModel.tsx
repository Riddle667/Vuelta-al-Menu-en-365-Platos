import { useContext, useState } from "react";
import * as yup from "yup";
// import { ChangePasswordUserUseCase } from "../../../../Domain/useCases/user/ChangePasswordUserUseCase";
import { ResponseAPIDelivery } from "../../../../Data/sources/remote/api/models/ResponseAPIDelivery";
import { showMessage } from "react-native-flash-message";

interface Values {
  password: string;
  confirmPassword: string;
}

interface ResponseErrorData {
  path: string;
  value: string;
}

const ChangePasswordModel = () => {

  const [values, setvalues] = useState<Values>({
    password: '',
    confirmPassword: '',
  });

  const [errorsMessages, setErrorMessages] = useState<Record<string, string>>({});

  const [errorsResponse, setErrosResponse] = useState<ResponseErrorData[]>([]);

  //Reemplazamos la columna que este en el valor de "property" buscando en "values". Por ejemplo si property es igual a "password" y values es igual a "123", entonces se reemplazara el valor de "password" por "123" en values.
  const onChange = (porperty: string, value: string) => {
    setvalues({ ...values, [porperty]: value });
  }

  const validationChangePasswordSchema = yup.object().shape({
    password: yup.string().required('La contraseña es requerida'),
    confirmPassword: yup.string().required('La confirmación de la contraseña es requerida').oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
  });

  const changePassword = async(navigation) => {
    showMessage({
      message: "Entrando...",
      type: "success",
      icon: "success"
    })
    const isValid = await isValidForm();
    if(isValid){
      setErrorMessages({});
      try{
        // const response = await ChangePasswordUserUseCase(values.password, values.confirmPassword);
        if(true){
          console.log('Contraseña actualizadaaasdasd');
          showMessage({
            message: "Contraseña Acualizadaaaaa",
            type: "success",
            icon: "success"
          })
          navigation.navigate("AdminHomeScreen");
        }
      } catch (error){
        const rejectErrors: ResponseAPIDelivery = error;

        if(rejectErrors.errors){
          setErrosResponse(rejectErrors.errors);
          showMessage({
            message: rejectErrors.message,
            type: "danger",
            icon: "danger"
          })
        }
      }
    }
  }

  const isValidForm = async (): Promise<boolean> => {
    try {
      await validationChangePasswordSchema.validate(values, {abortEarly: false});
      return true;
    } catch (error){
      const errors: Record<string, string> = {};
      error.inner.forEach((error: yup.ValidationError) => {
        errors[error.path] = error.message;
      });
      setErrorMessages(errors);
      console.log(errors);
      return false;
    }
  }

  return {
    ...values,
    onChange,
    changePassword,
    errorsMessages,
    errorsResponse,
  }
}

export default ChangePasswordModel;
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../../Domain/useCases/user/ListCategoyUseCase";
import { RemoveCategoryUseCase } from "../../../../../Domain/useCases/user/RemoveCategoryUseCase";
import { ListProductUseCase } from "../../../../../Domain/useCases/user/ListProductUseCase";
import { Category } from "../../../../../Domain/entities/Category";
import * as yup from "yup";
import * as ImagePicker from 'expo-image-picker';
import { RemoveProductUseCase } from "../../../../../Domain/useCases/user/RemoveProductUseCase";

const ListCategoriesScreen = () => {

  const [products, setProducts] = useState([]);
  const [idToRemove, setIdToRemove] = useState(0);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalRemoveVisible, setModalRemoveVisible] = useState(false);
  const [errorsMessages, setErrorMessages] = useState<Record<string, string>>({});
  const [category, setCategory] = useState<Category>({
    id: -1,
    name: "",
    description: "",
    image: ""
  });

  const onChange = (name: string, value: string) => {
    setCategory({
      ...category,
      [name]: value
    });
  }

  const getProducts = async () => {
    console.log("entrando")
    try {
      const response = await ListProductUseCase();
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  const isValidForm = async (): Promise<boolean> => {
    try {
      await validationChangePasswordSchema.validate(category, {abortEarly: false});
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

  const removeProduct = async () => { 
    try {
      const response = await RemoveProductUseCase(idToRemove);
      console.log(response);
      showMessage({
        message: "Producto eliminado con exito",
        type: "success",
      });
      setModalRemoveVisible(false);
      getProducts();
    } catch (error) {
      console.log("Error: ", error
      );
    }
  }

  const handleModalRemove = (visible: boolean, id: number) => {
    setModalRemoveVisible(visible);
    setIdToRemove(id);
  }

  const validationChangePasswordSchema = yup.object().shape({
    name: yup.string().required('EL nombres es requerido'),
    description: yup.string().required('La descripción es requerida'),
    image: yup.string().required('Es necesario subir una imagen'),
  });

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
      setCategory({ ...category, ["image"]: "data:image/png;base64," + result.assets[0].base64});
    } else {
      setCategory({ ...category, ["image"]: "123" });
    }
  }


  return {
    products,
    modalRemoveVisible,
    getProducts,
    handleModalRemove,
    removeProduct,

  };
};



export default ListCategoriesScreen; 

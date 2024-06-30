import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../../Domain/useCases/user/ListCategoyUseCase";
import { RemoveCategoryUseCase } from "../../../../../Domain/useCases/user/RemoveCategoryUseCase";
import { EditCategoryUseCase } from "../../../../../Domain/useCases/user/EditCategoryUseCase";
import { Category } from "../../../../../Domain/entities/Category";
import * as yup from "yup";
import * as ImagePicker from 'expo-image-picker';

const ListCategoriesScreen = () => {

  const [categories, setCategories] = useState([]);
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

  const removeCategory = async () => {
    try {
      const response = await RemoveCategoryUseCase(idToRemove);
      console.log(response);
      showMessage({
        message: "Categoria eliminada con exito",
        type: "success",
      });
      setModalRemoveVisible(false);
      getCategories();
    } catch (error) {
      console.log("Error: ", error
      );
    }
  }

  const editCategory = async () => {

    if (!isValidForm()) { 
      console.log("Error en el formulario");
      return;
    }

    try {
      const response = await EditCategoryUseCase(category);
      console.log(response);
      showMessage({
        message: "Categoria eliminada con exito",
        type: "success",
      });
      setModalEditVisible(false);
      setCategory({} as Category)
      getCategories();
    } catch (error) {
      console.log("Error: ", error
      );
    }
  }

  const getCategories = async () => {
    console.log("entrando")
    try {
      const response = await ListCategory();
      console.log(response);
      setCategories(response.data);
      console.log(response.data[0].image);
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const handleModalRemove = (open: boolean, id?: number) => {
    setModalRemoveVisible(open);
    setIdToRemove(id);
  }

    const handleModalEdit = (open: boolean, category?: Category) => {
    setModalEditVisible(open);
    setCategory(category);
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
    ...category,
    getCategories,
    removeCategory,
    setModalRemoveVisible,
    handleModalRemove,
    handleModalEdit,
    editCategory,
    onChange,
    selectImage,
    categories,
    modalRemoveVisible,
    idToRemove,
    modalEditVisible,
    category,
    errorsMessages
  };
};



export default ListCategoriesScreen; 

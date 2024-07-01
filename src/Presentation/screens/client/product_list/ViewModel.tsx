import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../Domain/useCases/user/ListCategoyUseCase";
import { RemoveCategoryUseCase } from "../../../../Domain/useCases/user/RemoveCategoryUseCase";
import { ListProductUseCase } from "../../../../Domain/useCases/user/ListProductUseCase";
import { Product } from "../../../../Domain/entities/Product";
import * as yup from "yup";
import * as ImagePicker from 'expo-image-picker';
import { RemoveProductUseCase } from "../../../../Domain/useCases/user/RemoveProductUseCase";
import { EditProductUseCase } from "../../../../Domain/useCases/user/EditProductUseCase";
import { LocalStorage } from '../../../../Data/sources/local/LocalStorage';

const ListCategoriesScreen = () => {

  const [rol, setRol] = useState("" as string);
  const [products, setProducts] = useState([]);
  const [idToRemove, setIdToRemove] = useState(0);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalRemoveVisible, setModalRemoveVisible] = useState(false);
  const [errorsMessages, setErrorMessages] = useState<Record<string, string>>({});
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    images: [],
    id: -1,
    price: "",
  });

  const { getItem } = LocalStorage()

  const onChange = (name: string, value: string) => {
    setProduct({
      ...product,
      [name]: value
    });
  }

  const editProduct = async () => {
    if (!isValidForm()) { 
      console.log("Error en el formulario");
      return;
    }

    try {
      const response = await EditProductUseCase(product);
      console.log(response);
      showMessage({
        message: "Producto editado con exito",
        type: "success",
      });
      setModalEditVisible(false);
      getProducts();
    } catch (error) {
      console.log("Error: ", error
      );
    }
  }

  const getRol = async () => {
    setRol(await getItem("rol"));
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
      await validationChangePasswordSchema.validate(product, {abortEarly: false});
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

  const handleModalRemove = (visible: boolean, id?: number) => {
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

    // if (!result.canceled) {
    //   // const exists = await RNFS.exists(result.assets[0].uri);
    //   setProduct({ ...product, ["image"]: "data:image/png;base64," + result.assets[0].base64});
    // } else {
    //   setProduct({ ...product, ["image"]: "123" });
    // }
  }

  const handleModalEdit = (visible: boolean, product?: Product) => {
    setModalEditVisible(visible);
    setProduct(product);
  }

  return {
    products,
    modalRemoveVisible,
    modalEditVisible,
    product,
    rol,
    getProducts,
    handleModalRemove,
    removeProduct,
    onChange,
    handleModalEdit,
    editProduct,
    selectImage,
    getRol
  };
};

export default ListCategoriesScreen; 

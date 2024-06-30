import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../../Domain/useCases/user/ListCategoyUseCase";
import { RemoveCategoryUseCase } from "../../../../../Domain/useCases/user/RemoveCategoryUseCase";

interface Values {
  name: string;
  description: string;
  image: string;
}

interface ResponseErrorData {
  path: string;
  value: string;
}


const ListCategoriesScreen = () => {

  const [categories, setCategories] = useState([]);
  
  const [modalVisible, setModalVisible] = useState(false);

  const [idToRemove, setIdToRemove] = useState(0);

  const removeCategory = async () => {
    console.log("removiendo")
    console.log(idToRemove)
    try {
      const response = await RemoveCategoryUseCase(idToRemove);
      console.log(response);
      showMessage({
        message: "Categoria eliminada con exito",
        type: "success",
      });
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

  const openModal = (open: boolean, id?: number) => {
    setModalVisible(open);
    setIdToRemove(id);
  }


  return {
    getCategories,
    removeCategory,
    setModalVisible,
    openModal,
    categories,
    modalVisible,
    idToRemove
  };
};



export default ListCategoriesScreen; 

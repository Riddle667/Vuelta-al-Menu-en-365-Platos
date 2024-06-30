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
  
  const removeCategory = async (id: number) => {
    console.log("removiendo")
    try {
      const response = await RemoveCategoryUseCase(id);
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

  return {
    getCategories,
    removeCategory,
    categories
  };
};



export default ListCategoriesScreen; 

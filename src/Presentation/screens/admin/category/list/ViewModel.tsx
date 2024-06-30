import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../../Domain/useCases/user/ListCategoyUseCase";

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
    categories
  };
};



export default ListCategoriesScreen; 

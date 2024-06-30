import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { ListCategory } from "../../../../../Domain/useCases/user/ListCategoyUseCase";
import { RemoveCategoryUseCase } from "../../../../../Domain/useCases/user/RemoveCategoryUseCase";
import { EditCategoryUseCase } from "../../../../../Domain/useCases/user/EditCategoryUseCase";
import { Category } from "../../../../../Domain/entities/Category";

interface Values {
  id: number;
  name: string;
  description: string;
}

const ListCategoriesScreen = () => {

  const [categories, setCategories] = useState([]);
  const [idToRemove, setIdToRemove] = useState(0);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalRemoveVisible, setModalRemoveVisible] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: -1,
    name: "",
    description: "",
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


  return {
    getCategories,
    removeCategory,
    setModalRemoveVisible,
    handleModalRemove,
    handleModalEdit,
    editCategory,
    onChange,
    categories,
    modalRemoveVisible,
    idToRemove,
    modalEditVisible,
    category,
  };
};



export default ListCategoriesScreen; 

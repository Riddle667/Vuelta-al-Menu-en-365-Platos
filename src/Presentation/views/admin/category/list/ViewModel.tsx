import React, { useContext, useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory'
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory'
import { CategoryContext } from '../../../../context/CategoryContext'

const AdminCategoryListViewModel = () => {

    const [responseMessage, setResponseMessage] = useState('')
    const {categories, getCategories, remove} = useContext(CategoryContext)

   

    const deleteCategory = async (idCategory:string) =>{
      const result = await remove (idCategory)
      setResponseMessage(result.message)
    }
    

  return {
    categories,
    deleteCategory,
    responseMessage,
    getCategories

  }
}
export default AdminCategoryListViewModel

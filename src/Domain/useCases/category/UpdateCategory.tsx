import React from 'react'
import { CategoryRepositoryImp } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category'
const{update} = new CategoryRepositoryImp
import * as ImagePicker from 'expo-image-picker'

export const UpdateCategoryUseCase = async (category: Category) => {

  return await update(category)
}


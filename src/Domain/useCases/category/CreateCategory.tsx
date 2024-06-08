import React from 'react'
import { CategoryRepositoryImp } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category'
const{create} = new CategoryRepositoryImp
import * as ImagePicker from 'expo-image-picker'

export const CreateCategoryUseCase = async (category: Category, file: ImagePicker.ImagePickerAsset) => {

  return await create(category, file)
}


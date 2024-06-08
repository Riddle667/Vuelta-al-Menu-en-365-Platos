import React from 'react'
import { CategoryRepositoryImp } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category'
const{updateWithImage} = new CategoryRepositoryImp
import * as ImagePicker from 'expo-image-picker'

export const UpdateWithImageCategoryUseCase  = async (category: Category, file: ImagePicker.ImagePickerAsset) => {

  return await updateWithImage(category, file)
}
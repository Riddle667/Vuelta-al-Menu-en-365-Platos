import React from 'react'
import { CategoryRepositoryImp } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category'
const{remove} = new CategoryRepositoryImp
import * as ImagePicker from 'expo-image-picker'

export const DeleteCategoryUseCase = async (id: string) => {

  return await remove(id)
}


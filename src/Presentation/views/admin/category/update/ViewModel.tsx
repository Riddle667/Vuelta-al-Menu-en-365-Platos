import React, { useContext, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Category } from '../../../../../Domain/entities/Category'
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateCategory'
import { UpdateWithImageCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateWithImageCategory'
import { ResponseAPIDelivery } from '../../../../../Data/source/remote/models/ResponseApiDelivery'
import { CategoryContext } from '../../../../context/CategoryContext'

const AdminCategoryUpdateViewModel = (category: Category) => {

    const [values, setValues] = useState(category)

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const [responseMessage, setResponseMessage] = useState('');
    const {update, updateWithImage} = useContext(CategoryContext)

    const onChange=(property: string, value: any) =>{
        setValues({...values, [property]: value})
    }

    const updateCategory= async () =>{
        // En el caso de guardar en nube o que no se guarde local cambiar a 'https://'
        setLoading(true)
        let response = {} as ResponseAPIDelivery
        if (values.image?.includes('file:')) { 
            response = await update(values)
        }
        else{
            response = await updateWithImage(values, file!)
        }
        setLoading(false)
        setResponseMessage(response.message)
        resetForm()
    }

    const pickImage = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality:1 
      })

      if (!result.canceled) {
          onChange('image', result.assets[0].uri);
          setFile(result.assets[0]);
      }
  }

  const takePhoto = async() => {
      let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality:1 
      })

      if (!result.canceled) {
          onChange('image', result.assets[0].uri);
          setFile(result.assets[0]);
      }
  }

  const resetForm = async () => {
    setValues({
        name: '',
        description: '',
        image: ''
    })
  }


  return {
    ...values,
    onChange,
    takePhoto,
    pickImage,
    loading,
    responseMessage,
    updateCategory


  }
}
export default AdminCategoryUpdateViewModel

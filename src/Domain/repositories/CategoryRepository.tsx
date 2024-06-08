import { ImagePickerAsset } from "expo-image-picker";
import { ResponseAPIDelivery } from "../../Data/source/remote/models/ResponseApiDelivery";
import { Category } from "../entities/Category";
import * as ImagePicker from 'expo-image-picker'

export interface CategoryRepository {

    getAll(): Promise<Category[]>
    create(category: Category, file:ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>
    update(category: Category): Promise<ResponseAPIDelivery>
    updateWithImage(category: Category, file:ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>
    remove(id: string): Promise<ResponseAPIDelivery>

}
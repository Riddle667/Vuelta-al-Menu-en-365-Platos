import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseAPIDelivery";
import { Category } from "../entities/Category";

import * as ImagePicker from "expo-image-picker";


export interface UserCreateCategoryRepository {
  create(category: Category): Promise<ResponseAPIDelivery>
}
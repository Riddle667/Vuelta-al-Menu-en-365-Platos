import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseAPIDelivery";
import { Product } from "../entities/Product";

export interface UserProductRepository {
  create(category: Product): Promise<ResponseAPIDelivery>
}
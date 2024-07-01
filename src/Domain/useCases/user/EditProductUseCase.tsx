import { UserProductRepositoryImpl } from "../../../Data/repositories/UserProductRepository";
import { Product } from "../../entities/Product";

const { edit } = new UserProductRepositoryImpl();

export const EditProductUseCase = async (product: Product ) => { 
    return await edit(product)
}
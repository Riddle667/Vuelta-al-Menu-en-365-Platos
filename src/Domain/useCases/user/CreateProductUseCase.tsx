import { UserProductRepositoryImpl } from "../../../Data/repositories/UserProductRepository";
import { Product } from "../../entities/Product";

const { create } = new UserProductRepositoryImpl();

export const CreateProductUseCase = async (product: Product) => { 
    return await create(product)
}
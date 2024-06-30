import { UserProductRepositoryImpl } from "../../../Data/repositories/UserProductRepository";

const { getProducts } = new UserProductRepositoryImpl();

export const ListProductUseCase = async () => { 
    return await getProducts()
}
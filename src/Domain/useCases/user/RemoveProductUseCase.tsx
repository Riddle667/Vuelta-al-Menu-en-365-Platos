import { UserProductRepositoryImpl } from "../../../Data/repositories/UserProductRepository";

const { remove } = new UserProductRepositoryImpl();

export const RemoveProductUseCase  = async (id: number) => { 
    return await remove(id)
}
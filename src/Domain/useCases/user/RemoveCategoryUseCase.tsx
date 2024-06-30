import { UserCategoryRepositoryImpl } from "../../../Data/repositories/UserCategory";
import { Category } from "../../entities/Category";

const { remove } = new UserCategoryRepositoryImpl();

export const RemoveCategoryUseCase = async (id: number) => { 
    return await remove(id)
}
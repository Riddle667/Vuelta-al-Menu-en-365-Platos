import { UserCategoryRepositoryImpl } from "../../../Data/repositories/UserCategory";
import { Category } from "../../entities/Category";

const { edit } = new UserCategoryRepositoryImpl();

export const EditCategoryUseCase = async (category: Category) => { 
    return await edit(category)
}
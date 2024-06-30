import { UserCategoryRepositoryImpl } from "../../../Data/repositories/UserCategory";
import { Category } from "../../entities/Category";

const { create } = new UserCategoryRepositoryImpl();

export const CreateCategoryUseCase = async (category: Category) => { 
    return await create(category)
}
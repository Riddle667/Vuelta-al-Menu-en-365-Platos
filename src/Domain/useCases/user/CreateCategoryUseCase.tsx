import { CreateCategoryRepositoryImpl } from "../../../Data/repositories/CreateCategory";
import { Category } from "../../entities/Category";

const { create } = new CreateCategoryRepositoryImpl();

export const CreateCategoryUseCase = async (category: Category) => { 
    return await create(category)
}
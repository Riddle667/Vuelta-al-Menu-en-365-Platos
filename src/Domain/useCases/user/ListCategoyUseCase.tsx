import { UserCategoryRepositoryImpl } from "../../../Data/repositories/UserCategory";

const { getCategories } = new UserCategoryRepositoryImpl();

export const ListCategory = async () => { 
    return await getCategories ()
}
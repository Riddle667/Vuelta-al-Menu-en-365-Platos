import { CategoryRepositoryImp } from "../../../Data/repositories/CategoryRepository";

const {getAll} = new CategoryRepositoryImp()


export const GetAllCategoryUseCase = async () => {
  return await getAll()
}


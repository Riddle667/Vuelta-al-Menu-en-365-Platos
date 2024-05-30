import { UserLocalRepositoryImp } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {getUser} = new UserLocalRepositoryImp();

export const GetUserLocalUseCase = async() => {
    return await getUser();
}
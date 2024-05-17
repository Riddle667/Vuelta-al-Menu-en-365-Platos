import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {verifyToken} = new UserLocalRepositoryImpl();

export const VerifyTokenUseCase  = async(token: string) => {
    return verifyToken(token);
}
import { RegisterUserRepositoryImpl } from "../../../Data/repositories/RegisterUser";
import { User } from "../../entities/User";

const { register } = new RegisterUserRepositoryImpl();

export const RegisterUserUseCase = async (user: User) => { 
    return await register(user)
}
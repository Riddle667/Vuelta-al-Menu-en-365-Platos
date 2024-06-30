import { UserChangePasswordRepositoryImpl } from "../../../Data/repositories/UserChangePassword";

const { ChangePassword } = new UserChangePasswordRepositoryImpl();

export const ChangePasswordUserUseCase = async (password: string) => { 
    return await ChangePassword(password);
}
import { UserChangePasswordRepositoryImpl } from "../../../Data/repositories/UserChangePassword";

const { ChangePassword } = new UserChangePasswordRepositoryImpl();

export const ChangePasswordUserUseCase = async (password: string, email: string, session_token: string) => { 
    return await ChangePassword(password, email, session_token);
}
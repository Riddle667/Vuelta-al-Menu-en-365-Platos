import { AxiosError } from "axios";
import { UserChangePasswordRepository } from "../../Domain/repositories/UserChangePassword";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";




export class UserChangePasswordRepositoryImpl implements UserChangePasswordRepository {
    async ChangePassword(password: string, email: string, session_token: string): Promise<ResponseAPIDelivery> {
        try {

            console.log(password);
            console.log(email);
            console.log(session_token);
            const path = "/user/change-password";

            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, { email: email, newPassword: password, token: session_token}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return Promise.resolve(data);
        } catch (error) {
            console.log("Ocurrió un error al cambiar la contraseña");
            console.log('ERROR: ', JSON.stringify(error));
            let e = (error as AxiosError);
            // console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError)
        }
    }
}
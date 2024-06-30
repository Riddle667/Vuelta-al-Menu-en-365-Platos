import { AxiosError } from "axios";
import { UserChangePasswordRepository } from "../../Domain/repositories/UserChangePassword";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserChangePasswordRepositoryImpl implements UserChangePasswordRepository {
    async ChangePassword(password: string): Promise<ResponseAPIDelivery> {

        const { getItem } = LocalStorage();

        try {
            console.log(password);
            console.log(await getItem("email"))
            console.log(await getItem("token"))
            const path = "/user/change-password";
            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, { email: await getItem("email"), newPassword: password, token: await getItem("token")});
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
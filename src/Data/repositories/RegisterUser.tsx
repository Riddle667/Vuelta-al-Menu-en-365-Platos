import { RegisterUserRepository } from "../../Domain/repositories/RegisterUser";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { User } from "../../Domain/entities/User";
import { HOST_EMULATOR} from "@env"

export class RegisterUserRepositoryImpl implements RegisterUserRepository {
    async register(user: User): Promise<ResponseAPIDelivery> {
        try {
            const path = "/auth/register";  
            console.log(user)
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(path, user);
            console.log("Respuesta recibida del servidor...");
            return Promise.resolve(data);
        } catch (error) {
            console.log("Error desde la API: ");
            console.log(error.errors);
            // let e = (error as AxiosError);
            // console.log('ERROR: ', JSON.stringify(e.response?.data));
            // const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(error)
        }
    }
}
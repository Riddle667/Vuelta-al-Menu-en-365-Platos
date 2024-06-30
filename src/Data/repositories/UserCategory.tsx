import { AxiosError } from "axios";
import { UserCategoryRepository } from "../../Domain/repositories/UserCreateCategory";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { Category } from "../../Domain/entities/Category";
import { HOST_LOCAL, HOST_EMULATOR} from "@env"
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserCategoryRepositoryImpl implements UserCategoryRepository {
    async create(category: Category): Promise<ResponseAPIDelivery> {
        try {
            const path = "/category/create-category";
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            ApiDelivery.defaults.headers.common['Authorization'] = await LocalStorage().getItem("token");
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(path, category);
            console.log("Respuesta recibida del servidor...");

            return Promise.resolve(data);
        } catch (error) {
            console.log("Error: ");
            console.log(error);
            // let e = (error as AxiosError);
            // console.log('ERROR: ', JSON.stringify(e.response?.data));
            // const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(error)
        }
    }

    async getCategories(): Promise<ResponseAPIDelivery> {

        const { getItem } = LocalStorage();

        try {
            const path = "/category/show-category";
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log(await getItem("token"));
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            ApiDelivery.defaults.headers.common['Authorization'] = "Bearer " + await getItem("token");
            console.log(ApiDelivery)
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>(path);
            console.log("Respuesta recibida del servidor...");
            return Promise.resolve(data);
        } catch (error) {
            console.log("Error: ");
            console.log(error);
            return Promise.reject(error)
        }
    }

    async remove(id: number): Promise<ResponseAPIDelivery> {
        try {
            const path = "category/delete-category/" + id.toString();
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            const { data } = await ApiDelivery.delete<ResponseAPIDelivery>(path);
            console.log("Respuesta recibida del servidor...");
            return Promise.resolve(data);
        } catch (error) {
            console.log("Error: ");
            console.log(error);
            return Promise.reject(error)
        }
    }
}
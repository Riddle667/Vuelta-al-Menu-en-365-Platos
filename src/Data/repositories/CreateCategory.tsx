import { AxiosError } from "axios";
import { UserCreateCategoryRepository } from "../../Domain/repositories/UserCreateCategory";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { Category } from "../../Domain/entities/Category";
import { HOST_LOCAL, HOST_EMULATOR} from "@env"

export class CreateCategoryRepositoryImpl implements UserCreateCategoryRepository {
    async create(category: Category): Promise<ResponseAPIDelivery> {
        try {
            const path = "/category/create-category";

            console.log("ruta: " + HOST_EMULATOR + path);

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
}
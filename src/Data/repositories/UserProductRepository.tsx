import { AxiosError } from "axios";
import { UserProductRepository } from "../../Domain/repositories/UserProduct";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { Product } from "../../Domain/entities/Product";
import { HOST_LOCAL, HOST_EMULATOR} from "@env"
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserProductRepositoryImpl implements UserProductRepository {
    async create(product: Product): Promise<ResponseAPIDelivery> {
        const { getItem } = LocalStorage();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('images', product.images);

        const token = await getItem("token");
        console.log(token)

        try {
            const path = "/product/create-product?collection=products";
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            console.log("data: ")
            console.log(product);
            ApiDelivery.defaults.headers.common['Authorization'] = "Bearer " + token;
            // ApiDelivery.defaults.headers.common['Content-Type'] = "multipart/form-data";
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(path, product);
            console.log("Respuesta recibida del servidor...");

            return Promise.resolve(data);
        } catch (error) {
            console.log("Error: ");
            console.log(error);
            return Promise.reject(error)
        }
    }
}
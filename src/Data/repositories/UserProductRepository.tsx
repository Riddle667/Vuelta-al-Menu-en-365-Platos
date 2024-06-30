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
        formData.append('categoryIds', "cat-1");
        formData.append('files', product.images[0]);

        const token = await getItem("token");
        console.log(token)

        try {
            const path = "/product/create-product?collection=products";
            console.log("ruta: " + HOST_EMULATOR + path);
            console.log("Esperando respuesta de: " + HOST_EMULATOR + path);
            console.log("data: ")
            console.log(product);
            ApiDelivery.defaults.headers.common['Authorization'] = "Bearer " + token;
            ApiDelivery.defaults.headers.common['Content-Type'] = "multipart/form-data";
            console.log(ApiDelivery.defaults.headers.common['Content-Type'])
            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, formData);
            console.log("Respuesta recibida del servidor...");

            return Promise.resolve(data);
        } catch (error) {
            console.log("Error: ");
            console.log(error);
            return Promise.reject(error)
        }
    }

     async getProducts(): Promise<ResponseAPIDelivery> {

        const { getItem } = LocalStorage();

        try {
            const path = "/product/products";
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
            const path = "/product/delete-product/" + id.toString();
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
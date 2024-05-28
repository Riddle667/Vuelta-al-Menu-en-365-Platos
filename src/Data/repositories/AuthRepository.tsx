import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../source/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../source/remote/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository{

    async register(user: User): Promise<ResponseAPIDelivery> {
        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/create', user);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}
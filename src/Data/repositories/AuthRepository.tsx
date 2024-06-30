import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import { User } from "../../Domain/entities/User";
import { LocalStorage } from "../sources/local/LocalStorage";


export class AuthRepositoryImpl implements AuthRepository {
    async login(email: string, password: string): Promise<ResponseAPIDelivery> {

            const { save } = LocalStorage();

        try {
            console.log("desde la llamada")
            console.log('Email: ',email);
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('/auth/login', { email, password });
            console.log('Data: ', data);
            save("token", data.data.session_token);
            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError & ResponseAPIDelivery);
            console.log('Error desde data: ',JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }
    
    async register(user: User): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('auth/register', user);
            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ',JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }
}
import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery, ApiDeliveryForImage } from "../source/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../source/remote/models/ResponseApiDelivery";
import { ImagePickerAsset } from "expo-image-picker";
import mime from 'mime'

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
    async registerWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try {

            let data = new FormData();
            data.append('image',{
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user))

            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/users/createWithImage', data);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    } 

    async login(email: string, password: string): Promise<ResponseAPIDelivery> {
        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/login',{
                email: email,
                password: password
            } );
            
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}
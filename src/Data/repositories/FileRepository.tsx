import mime from "mime";
import { FileRepository } from "../../Domain/repositories/FileRepository";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";
import * as ImagePicker from 'expo-image-picker';
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class FileRepositoryImpl implements FileRepository {
    async updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery> {
        try {
            let imageRegister = new FormData();

            const fileUri = file.uri;
            const fileName = fileUri.split('/').pop() || 'unknown';
            const fileType = mime.getType(fileUri) || 'application/octet-stream';

            // Convertir el archivo a Blob
            const response = await fetch(fileUri);
            const blob = await response.blob();

            imageRegister.append('archive', blob, fileName);

            const path = `upload/${collection}/${id}`;
            const { data } = await ApiDelivery.put(path, imageRegister, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }

    async updateFiles(files: ImagePicker.ImageInfo[], collection: string, id: string): Promise<ResponseAPIDelivery> {
        try {
            let imagesRegister = new FormData();

            for (const file of files) {
                const fileUri = file.uri;
                const fileName = fileUri.split('/').pop() || 'unknown';
                const fileType = mime.getType(fileUri) || 'application/octet-stream';

                // Convertir el archivo a Blob
                const response = await fetch(fileUri);
                const blob = await response.blob();

                imagesRegister.append('archives', blob, fileName);
            }

            const path = `upload/${collection}/${id}`;
            const { data } = await ApiDelivery.put(path, imagesRegister, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }
}

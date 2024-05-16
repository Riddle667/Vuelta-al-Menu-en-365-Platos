import { AxiosError } from "axios";
import { UserChangePasswordRepository } from "../../Domain/repositories/UserChangePassword";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseAPIDelivery";




// export class UserChangePasswordRepositoryImpl implements UserChangePasswordRepository {
//     async ChangePassword(password: string, confirmPassword: string): Promise<ResponseAPIDelivery> {
//         try {
//             const path = `user/${id}`;

//             const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, { name, lastName, phone }, {
//                 headers: {
//                     'Authorization': `Bearer ${session_token}`
//                 }
//             });

//             return Promise.resolve(data);
//         } catch (error) {
//             let e = (error as AxiosError);
//             // console.log('ERROR: ', JSON.stringify(e.response?.data));
//             const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
//             return Promise.reject(apiError)
//         }
//     }
// }
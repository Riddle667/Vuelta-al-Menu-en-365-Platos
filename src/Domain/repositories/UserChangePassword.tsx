import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseAPIDelivery";

export interface UserChangePasswordRepository {
  ChangePassword(password: string, confirmPassword: string): Promise<ResponseAPIDelivery>;
}
import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseAPIDelivery";

export interface UserChangePasswordRepository {
  ChangePassword(password: string, email: string, session_token: string): Promise<ResponseAPIDelivery>;
}
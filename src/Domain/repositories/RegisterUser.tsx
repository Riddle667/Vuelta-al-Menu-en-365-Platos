import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseAPIDelivery";
import { User } from "../entities/User";

export interface RegisterUserRepository {
  register(user: User): Promise<ResponseAPIDelivery>
}
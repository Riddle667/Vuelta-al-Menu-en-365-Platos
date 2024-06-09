import { Address } from "react-native-maps";
import { ResponseAPIDelivery } from "../../Data/source/remote/models/ResponseApiDelivery";

export interface AddressRepository {
    create(address: Address): Promise<ResponseAPIDelivery>
    getByUser(idUser: string): Promise<Address>
}
import { Address } from "../entities/Address";
import { ResponseAPIDelivery } from "../../Data/source/remote/models/ResponseApiDelivery";

export interface AddressRepository {
    create(address: Address): Promise<ResponseAPIDelivery>
    getByUser(idUser: string): Promise<Address[]>
}
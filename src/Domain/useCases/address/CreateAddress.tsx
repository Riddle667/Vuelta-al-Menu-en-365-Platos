import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";
import { Address } from "../../entities/Address";

const{create} = new AddressRepositoryImpl();

export const CreateAddressUseCase = async(addres: Address) => {
    return await create(addres)
}
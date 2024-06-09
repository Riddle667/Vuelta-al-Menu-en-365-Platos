import { AddressRepositoryImp } from "../../../Data/repositories/AddressRepository";
import { Address } from "../../entities/Address";

const{create} = new AddressRepositoryImp();

export const CreateAddressUseCase = async(addres: Address) => {
    return await create(addres)
}
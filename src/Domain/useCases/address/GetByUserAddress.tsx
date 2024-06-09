import { AddressRepositoryImp } from "../../../Data/repositories/AddressRepository";

const { getByUser } = new AddressRepositoryImp()

export const GetByUserAddressUseCase = async (idUser: string) => {
  return await getByUser(idUser)
}

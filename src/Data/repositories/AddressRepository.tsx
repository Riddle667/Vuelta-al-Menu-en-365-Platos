import { AxiosError } from 'axios';
import { Address } from '../../Domain/entities/Address';
import { AddressRepository } from '../../Domain/repositories/AddressRepository';
import { ApiDelivery} from '../source/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../source/remote/models/ResponseApiDelivery';

export class AddressRepositoryImp implements AddressRepository {

  async create(address: Address):Promise <ResponseAPIDelivery> {
    try {
      const response = await 
      ApiDelivery.post<ResponseAPIDelivery>('/address/create', address)
      return Promise.resolve(response.data)
    } catch (error) {

      let e = (error as AxiosError);
      console.log('ERROR' + JSON.stringify(e.response?.data));
      const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async getByUser(idUser: string): Promise<Address[]> {
    try {
      const response = await ApiDelivery.get<Address[]>(`/address/findByUser/${idUser}`)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = (error as AxiosError);
      console.log('ERROR' + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
}
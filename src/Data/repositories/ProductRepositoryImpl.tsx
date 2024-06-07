import { ProductRepository } from '../../Domain/repositories/ProductRepository';
import { Product } from '../../Domain/entities/Product';
import axios from 'axios';

export class ProductRepositoryImpl implements ProductRepository {
  async createProduct(product: Product): Promise<void> {
    const response = await axios.post('URL_DEL_BACKEND/api/products', product);
    if (response.status !== 201) {
      throw new Error('Error creating product');
    }
  }
}
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

  async getProducts(): Promise<Product[]> {
    const response = await axios.get('URL_DEL_BACKEND/api/products');
    if (response.status !== 200) {
      throw new Error('Error fetching products');
    }
    return response.data;
  }
}

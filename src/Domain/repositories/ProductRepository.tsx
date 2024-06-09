import { Product } from "../entities/Product";

export interface ProductRepository {
  createProduct(product: Product): Promise<void>;
  getProducts(): Promise<Product[]>;
}
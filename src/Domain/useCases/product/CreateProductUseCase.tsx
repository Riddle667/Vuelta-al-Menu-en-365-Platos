import { ProductRepository } from '../../repositories/ProductRepository';
import { Product } from '../../entities/Product';

export class CreateProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(product: Product) {
    await this.productRepository.createProduct(product);
  }
}
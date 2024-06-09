import { Product } from '../../entities/Product';
import { ProductRepository } from '../../repositories/ProductRepository';

export class GetProductsUseCase {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(): Promise<Product[]> {
        return await this.productRepository.getProducts();
    }
}

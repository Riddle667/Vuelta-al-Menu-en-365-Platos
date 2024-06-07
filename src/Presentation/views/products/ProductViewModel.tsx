import { makeAutoObservable } from 'mobx';
import { useNavigation } from '@react-navigation/native';
import { ProductRepository } from '../../../Domain/repositories/ProductRepository';
import { CreateProductUseCase } from '../../../Domain/useCases/userLocal/CreateProductUseCase';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepositoryImpl'; 

class ProductViewModel {
  private productRepository: ProductRepository;
  private createProductUseCase: CreateProductUseCase;
  private navigation;

  constructor(productRepository: ProductRepository, createProductUseCase: CreateProductUseCase) {
    makeAutoObservable(this);
    this.productRepository = productRepository;
    this.createProductUseCase = createProductUseCase;
    this.navigation = useNavigation();
  }

  async createProduct(productData: { name: string; description: string; price: number; images: string[] }) {
    try {
      await this.createProductUseCase.execute(productData);
      return true;
    } catch (error) {
      return false;
    }
  }

  goBack() {
    this.navigation.goBack();
  }
}

let productViewModel: ProductViewModel;

export const useProductViewModel = () => {
  if (!productViewModel) {
    const productRepository = new ProductRepositoryImpl(); 
    const createProductUseCase = new CreateProductUseCase(productRepository);
    productViewModel = new ProductViewModel(productRepository, createProductUseCase);
  }
  return productViewModel;
};
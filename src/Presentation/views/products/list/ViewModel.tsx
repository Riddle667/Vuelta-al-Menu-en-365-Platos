import { useState, useEffect } from 'react';
import { GetProductsUseCase } from '../../../../Domain/useCases/product/GetProductsUseCase';
import { Product } from '../../../../Domain/entities/Product';
import { ProductRepositoryImpl } from '../../../../Data/repositories/ProductRepositoryImpl';

const productRepository = new ProductRepositoryImpl();
const getProductsUseCase = new GetProductsUseCase(productRepository);

const useProductViewModel = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const products = await getProductsUseCase.execute();
            setProducts(products);
        } catch (error) {
            setErrorMessage((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        loading,
        errorMessage,
        fetchProducts,
    };
};

export default useProductViewModel;

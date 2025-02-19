import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct  as Product } from '../types/product';
import { UseProductResult } from '../types/useProductResult';
import getProductsById from '../../features/services/getProductsById';


const useProduct = (id: number): UseProductResult => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getProductsById(id);
        setProduct(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};
export default useProduct;
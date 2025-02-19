import { IProduct as Product } from "./product";
export interface UseProductResult {
    product: Product | null;
    loading: boolean;
    error: boolean;
  }
  
export interface IProduct {
  productId: number;
  businessId: number;
  categoryId: number;
  state: 'active' | 'inactive';
  name: string;
  photoUrl?: string;
  description?: string;
  deliveryTime?: string;
  price?: number;
  oldPrice?: number // Add price here if needed
}

// If you need a separate Product interface, ensure it extends IProduct or includes all necessary fields
export interface Product extends IProduct {
  price: number;
}


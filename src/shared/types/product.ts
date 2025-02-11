export interface IProduct {
  id: number;
  businessId: number;
  categoryId: number;
  state: 'active' | 'inactive';
  name: string;
  photoUrl?: string;
  description?: string;
  deliveryTime?: string;
}
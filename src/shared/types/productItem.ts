export interface IProductItem {
    id: number;
    productId: number;
    name: string;
    image: string;
    state: 'active' | 'inactive';
    oldPrice: number;
    price: number;
    count: number;

}
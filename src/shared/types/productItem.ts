interface IProductItem {
    id: number;
    productId: number;
    name: string;
    photoUrl: string;
    state: 'active' | 'inactive';
    oldPrice: number;
    price: number;
    count: number;

}
export default IProductItem
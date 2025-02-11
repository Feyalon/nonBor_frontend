import React from "react";
import getProducts from "../../features/services/getProducts";
import { IProduct } from "../types/product";
const UseProduct = () => {
    const [products, setProducts] = React.useState<IProduct[]>([]);
    React.useEffect(() => {
        const fetchProducts = async () => {
        try {
            const result = await getProducts();
            setProducts(result);
        } catch (error) {
            console.log("Could not fetch products", error);
        }
        };
        fetchProducts();
    }, []);
    return { products };
}
export default UseProduct;
import React from "react";
import { IProductItem } from "../types/productItem"; 
import { IProduct } from "../types/product";
import getProductItems from "../../features/services/getProductItems";
import getProducts from "../../features/services/getProducts";

const useProductCards = () => {
  const [productCards, setProductCards] = React.useState<IProductItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchProductItems = async () => {
      try {
        setLoading(true);
        const productItemsResponse = await getProductItems();
        const productsResponse = await getProducts();

        // Log the raw responses for debugging
        console.log("Product items response:", productItemsResponse);
        console.log("Products response:", productsResponse);

        // Ensure that the responses contain valid data
        if (!Array.isArray(productItemsResponse)) {
          throw new Error('Invalid product items response');
        }

        if (!Array.isArray(productsResponse)) {
          throw new Error('Invalid products response');
        }

        const productItems: IProductItem[] = productItemsResponse;
        const products: IProduct[] = productsResponse;

        // Сопоставляем товары с продуктами по productId
        const mappedProductItems: IProductItem[] = productItems
          .map((item) => {
            const product = products.find((p) => p.id === item.productId);
            return product
              ? { 
                  ...item, 
                  name: product.name, 
                  image: product.photoUrl || "" // Если нет фото, ставим пустую строку
                }
              : null;
          })
          .filter((item): item is IProductItem => item !== null);

        setProductCards(mappedProductItems);
      } catch (error) {
        console.error("Error fetching product cards", error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductItems();
  }, []);

  return { productCards, loading, error };
};

export default useProductCards;

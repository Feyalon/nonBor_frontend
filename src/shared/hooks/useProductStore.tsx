import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { productStore } from "../../app/store/productStore";

export const useProductStore = () => {
  const store = useLocalObservable(() => productStore);

  useEffect(() => {
    store.fetchProducts();
  }, [store]);

  return store;
};
import React from "react";
import { productItemStore } from "../../app/store/ProductItemStore";
import { useObserver } from 'mobx-react-lite';

const useProductCards = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProductCards = async () => {
      try {
        await productItemStore.fetchItems();
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (productItemStore.items.length === 0 || productItemStore.shouldFetchItems()) {
      fetchProductCards();
    } else {
      setLoading(false);
    }
  }, []);

  return useObserver(() => ({
    productCards: productItemStore.items,
    loading,
    error
  }));
};

export default useProductCards;


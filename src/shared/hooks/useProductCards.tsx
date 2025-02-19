import React from "react";
import { getProductCards } from "../../features/services/getProductCards";

const useProductCards = () => {
  const [productCards, setProductCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {

    getProductCards().then((result) => {
      setProductCards(result);
      console.log(result)
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });

  }, []);
  return { productCards, loading, error };
};
export default useProductCards;
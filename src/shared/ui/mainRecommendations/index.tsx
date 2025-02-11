import useProductCards from "../../hooks/useProductCards";
import ProductCart from "../productCart";
import "./index.css";
const MainRecommendations = () => {
  const { productCards, loading, error } = useProductCards();

  return (
    <div className="mainRecommendation">
      <h1>Siz uchun</h1>
      <div className="tags">
        <p>Nonboyxonalar</p>
        <p>Saralash</p>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!loading && (
        <div className="main_content-wrapper">
          <div className="main_content_productCards">
            {productCards.map((productCard) => (
              <ProductCart
                key={productCard.id}
                name={productCard.name}
                price={productCard.price}
                image={productCard.image}
                oldPrice={productCard.oldPrice}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MainRecommendations;

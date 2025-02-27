import { Link } from "react-router";
import ProductCart from "../productCart";
import "./index.css";
import useProductCards from "../../hooks/useProductCards";
import IProductItem from "../../types/productItem"
const MainRecommendations = () => {
  const {
    productCards
  } = useProductCards()

  return (
    <div className="mainRecommendation">
      <h1 className="title">Siz uchun</h1>
      <div className="tags">
        <button className="tag-button">
          <img
            src="/home.png"
            alt="Nonvoyxonalar icon"
          />
          Nonvoyxonalar
        </button>
        <button className="tag-button">
          <img
            src="/filter.png"
            alt="Saralash icon"
          />
          Saralash
        </button>
      </div>

        <div className="main_content-wrapper">
          <div className="category">
            <img
              src="./non1.jpg"
              alt="Samarqand nonlari icon"
            />
            <h2>Samarqand nonlari</h2>
          </div>
          <div className="main_content_productCards">
            {productCards.map((item: IProductItem, index) => (
              <Link to={`/${item.productId}`} key={`${item.name}-${index}`}>
                <ProductCart
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  image={item.photoUrl}
                />
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default MainRecommendations;

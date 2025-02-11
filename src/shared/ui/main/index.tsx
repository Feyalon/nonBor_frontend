import React from "react";
import Product from "../product";
import UseProduct from "../../hooks/useProducts";
import "./index.css";
import MainRecommendations from "../mainRecommendations";

const Main: React.FC = (): JSX.Element => {
  const { products } = UseProduct();

  return (
    <div className="main_content">
      <div className="main_category">
        <div className="main_category_content">
          <h1>Kategoriyalar</h1>
          <div className="main_category_content_products">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                image={product.photoUrl || ""}
              />
            ))}
          </div>
        </div>
        <MainRecommendations />
      </div>
    </div>
  );
};

export default Main;

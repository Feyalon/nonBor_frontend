import React from "react";
import "./index.css";
import MainRecommendations from "../mainRecommendations";
import UseCategory from "../../hooks/useCategory";
import Category from "../category";

const Main: React.FC = (): JSX.Element => {
  const { category } = UseCategory();
  return (
    <div className="main_content">
      <div className="main_category">
        <div className="main_category_content">
          <h1>Kategoriyalar</h1>
          <div className="main_category_content_products">
            {category.map((product) => (
              <Category
                key={product.id}
                title={product.title}
                image={
                  "/category.jpeg"
                }
              />
            ))}
          </div>
        </div>
        <MainRecommendations />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Main;

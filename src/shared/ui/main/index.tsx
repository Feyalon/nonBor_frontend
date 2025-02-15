import React from "react";
import Product from "../product";
import UseProduct from "../../hooks/useProducts";
import useProductCards from "../../hooks/useProductCards";
import "./index.css";
import MainRecommendations from "../mainRecommendations";
import UseCategory from "../../hooks/useCategory";
import Category from "../category";

const Main: React.FC = (): JSX.Element => {
  const { productCards } = useProductCards();
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
                  "https://s3-alpha-sig.figma.com/img/188f/25dc/5415460d81114514b594c5b46f772654?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CxMtLMBHm~wGqzdgPfUtBtu83VLH6OsmedEdxDcge6KEH-T2-ufRtl6n0Uc4729IejNuzk1O-X5CUJ7Et4WeXLfaGzu8f4PEa7W7hgKdlVxCCxE~18D38RlWtauQnOvEWDL~jiwMsH-nmCO00OvOImEIQyYEWdThIPIPBrNnVcOnvOwsL5w9UQsCOSUETPPYsL6~Lyp0IdkwdG9MqvAKYPO-j9aIg7n4OEL99eYj9FzT8JN8pq5bFMwfGVHhQJF6LxhnulFSOz7tBKdbuE7LYx-lnnk7gX~oo7yFi69EuQGbr-ew7p7Hy3R4RnZp2bOJMtodjci7Kh5K3TrBjcv4gw__"
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

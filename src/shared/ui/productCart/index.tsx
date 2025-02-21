import React from "react";
import "./index.css";
const ProductCart: React.FC<{ name: string, price: number, image: string, oldPrice: number }> = ({
  name,
  price,
  oldPrice,
  image,
}) => {

  return (
    <div className="product_cart">
      <img src={image} alt="" />
      <br />
      <p>
        {name}
      </p>
      <div className="product_price">
        {oldPrice == null ? (
            <span className="price">{price} so'm</span>
          ) : (
            <div className="product_content">
              <span className="old_price">{oldPrice} so'm</span>
              <span className="price blue">{price} so'm</span>
            </div>
          )}
      </div>
    </div>
  );
};
export default ProductCart;
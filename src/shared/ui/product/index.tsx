import React from "react";

const Product: React.FC<{ price: number; image: string }> = ({
  price,
  image,
}) => {
  return (
    <div className="main_category_content_products_item">
      <img src={image} alt="" />
      <h2>{price}</h2>
    </div>
  );
};
export default Product;
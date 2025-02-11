import React from "react";

const Product: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  return (
    <div className="main_category_content_products_item">
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};
export default Product;
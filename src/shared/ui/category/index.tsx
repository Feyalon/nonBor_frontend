import React from "react";

const Category: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div className="main_category_content_products_item">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};
export default Category;
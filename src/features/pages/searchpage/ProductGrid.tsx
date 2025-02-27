import React from "react";
import IProductItem from "../../../shared/types/productItem";
import { Link } from "react-router";

interface ProductGridProps {
  products: IProductItem[];
  searchTerm?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, searchTerm = '' }) => {

  const highlightText = (text: string = '', highlight: string = '') => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <Link key={`${product.name}-${index}`} to={`/${product.productId}`}>
          <div className="product-card">
            <div className="product-image" style={{
              backgroundImage: `url('${product.photoUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "250px",
              borderRadius: "10px"
            }} />
            <div className="product-price">
              <div className="product-price-title">
                <h3>{highlightText(product.name || '', searchTerm)}</h3>
              </div>
              <div className="product-price-content">
                {product.oldPrice == null ? (
                  <span className="product_price">{product.price} UZS</span>
                ) : (
                  <div>
                    <span className="product_old_price">{product.oldPrice}</span>
                    <span className="product_price blue">{product.price} UZS</span>
                  </div>
                )}
                <button className="add-to-cart">
                  <img
                    src="/addcart.png"
                    alt="Add to cart"
                  />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;


import React from 'react';

interface PriceDisplayProps {
  price: number;
  oldPrice?: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, oldPrice }) => {
  return (
    <div className="product-price">
      <div className="product-price-content">
        <span className="product_price">{price} UZS</span>
        {oldPrice && <span className="product_old_price">{oldPrice} UZS</span>}
      </div>
    </div>
  );
};

export default PriceDisplay;
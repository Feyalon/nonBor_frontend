import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="mainRecommendation">
      <div className="main-content-wrapper">
        <h1>Savat</h1>
        <div className="cart-empty">
          <img src="/path-to-cart-icon.png" alt="Empty cart" />
          <p>Hech narsa yo'q</p>
          <button>Xarid qilish</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
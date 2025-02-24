import React from 'react';

const EmptyFavorites: React.FC = () => {
  return (
    <div className="empty-favorites">
      <img src="/love.png" alt="Empty favorites" />
      <h2>Hech narsa yo'q</h2>
      <p>Sevimliga qo'shilgan mahsulotlar shu yerda paydo bo'ladi</p>
    </div>
  );
};

export default EmptyFavorites;
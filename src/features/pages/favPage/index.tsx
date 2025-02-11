import React from 'react';

const FavoritesPage: React.FC = () => {
  return (
    <div className="mainRecommendation">
      <div className="main-content-wrapper">
        <h1>Sevimlilar</h1>
        <div className="favorites-empty">
          <img src="/path-to-heart-icon.png" alt="Empty favorites" />
          <p>Hech narsa yo'q</p>
          <button>Xarid qilish</button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
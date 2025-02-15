import React from 'react';

interface FavoriteItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ item }) => {
  return (
    <div className="favorite-item">
      <img src={item.image} alt={item.name} />
      <div className="favorite-item-details">
        <h2>{item.name}</h2>
        <p>{item.price} UZS</p>
      </div>
      <button className="add-to-cart-btn">Savatga qo'shish</button>
      <button className="remove-favorite-btn">X</button>
    </div>
  );
};

export default FavoriteItem;
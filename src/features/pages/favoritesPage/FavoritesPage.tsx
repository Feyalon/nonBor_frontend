import React from 'react';
import FavoriteItem from './FavoriteItem';
import EmptyFavorites from './EmptyFavorites';
import './FavoritesPage.css';

const FavoritesPage: React.FC = () => {
interface FavoriteItemType {
    id: number;
    name: string;
    image: string;
    price: number;
}

const favorites: FavoriteItemType[] = []; // This should be populated with actual favorite items

  return (
    <div className="favorites-page">
      <h1>Sevimlilar</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((item) => (
            <FavoriteItem key={item.id}  item={item}/>
          ))}
        </div>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
};

export default FavoritesPage;
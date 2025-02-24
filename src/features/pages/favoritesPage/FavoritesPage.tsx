import React from "react";
import FavoriteItem from "./FavoriteItem";
import EmptyFavorites from "./EmptyFavorites";
import "./FavoritesPage.css";
import { favoriteStore } from "../../../app/store/FavoriteStore";
import { observer } from "mobx-react";

const FavoritesPage: React.FC = observer(() => {
  const { favorites } = favoriteStore; // This should be populated with actual favorite items
  console.log(favorites);
  return (
    <div className="favorites-page">
      <h1>Sevimlilar</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((item) => (
            <FavoriteItem key={`${item.name}-${item.productId}`} {...item} />
          ))}
        </div>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
});

export default FavoritesPage;

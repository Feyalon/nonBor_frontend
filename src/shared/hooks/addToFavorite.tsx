import { favoriteStore } from '../../app/store/FavoriteStore';
import Ifav from "../types/favorites";
import { useCallback } from 'react';
import { observer } from 'mobx-react';

const addToFavorite = observer((product: Ifav) => {
  const handleAddToFavorites = useCallback(() => {
    favoriteStore.addToFavorites(product);
  }, [product]);

  return {
    handleAddToFavorites,
    favorites: favoriteStore.favorites,
  };
});

export default addToFavorite;

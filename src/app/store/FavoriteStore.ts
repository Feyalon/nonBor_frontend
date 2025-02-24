import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { Product } from '../../shared/types/product';


class FavoriteStore {
  favorites: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  addToFavorites(product: Product) {
    this.favorites.push(product);
    this.saveToLocalStorage();
    // TODO: Implement API call to add to favorites
  }

  removeFromFavorites(name: string) {
    this.favorites = this.favorites.filter(item => item.name !== name);
    this.saveToLocalStorage();
    // TODO: Implement API call to remove from favorites
  }

  clearFavorites() {
    this.favorites = [];
    this.saveToLocalStorage();
    // TODO: Implement API call to clear favorites
  }

  async fetchFavorites() {
    try {
      // TODO: Replace with actual API endpoint
      const response = await axios.get<Product[]>('https://api.example.com/favorites');
      runInAction(() => {
        this.favorites = response.data;
        this.saveToLocalStorage();
      });
    } catch (error) {
      console.error('Failed to fetch favorites:', error);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFromLocalStorage() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }
}

export const favoriteStore = new FavoriteStore();
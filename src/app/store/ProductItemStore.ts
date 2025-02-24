import { makeAutoObservable } from 'mobx';
import { getProductCards } from '../../features/services/getProductCards';
import IProductItem from '../../shared/types/productItem';

class ProductItemStore {
  items: IProductItem[] = [];
  itemsMap: Map<number, IProductItem> = new Map();
  lastFetchTime: number = 0;
  cacheExpirationTime: number = 5 * 60 * 1000; // 5 minutes

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const storedData = localStorage.getItem('productItems');
    if (storedData) {
      const { items, lastFetchTime } = JSON.parse(storedData);
      this.items = items;
      this.itemsMap = new Map(items.map(item => [item.id, item]));
      this.lastFetchTime = lastFetchTime;
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('productItems', JSON.stringify({
      items: this.items,
      lastFetchTime: this.lastFetchTime
    }));
  }
  addItem(item: IProductItem) {
    this.items.push(item);
    this.itemsMap.set(item.id, item);
  }

  removeItem(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.itemsMap.delete(id);
    }
  }

  updateItem(id: number, updates: Partial<IProductItem>) {
    const item = this.itemsMap.get(id);
    if (item) {
      Object.assign(item, updates);
      this.itemsMap.set(id, item);
    }
  }

  getItem(id: number) {
    return this.itemsMap.get(id);
  }

  setItems(items: IProductItem[]) {
    this.items = items;
    this.itemsMap = new Map(items.map(item => [item.id, item]));
    this.lastFetchTime = Date.now();
    this.saveToLocalStorage();
  }

  shouldFetchItems() {
    return Date.now() - this.lastFetchTime > this.cacheExpirationTime;
  }

  async fetchItems() {
    if (this.shouldFetchItems()) {
      try {
        const productCards = await getProductCards();
        if (productCards) {
          this.setItems(productCards);
        }
      } catch (error) {
        console.error('Error fetching product cards:', error);
      }
    }
    return this.items;
  }

  get totalItems() {
    return this.items.length;
  }

  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

export const productItemStore = new ProductItemStore();
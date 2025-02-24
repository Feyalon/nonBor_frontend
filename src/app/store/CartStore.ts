import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { runInAction as mobxRunInAction } from 'mobx';

interface Product {
  id?: number;
  name: string;
  price: number;
  oldPrice?: number;
  photoUrl?: string;
  description?: string;
  deliveryTime?: string;
  count?: number;
}

class CartStore {
  cart: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.count = (existingProduct.count || 1) + 1;
    } else {
      this.cart.push({ ...product, count: 1 });
    }
    this.saveToLocalStorage();
  }

  removeFromCart(name: string) {
    this.cart = this.cart.filter(item => item.name !== name);
    this.saveToLocalStorage();
  }

  clearCart() {
    this.cart = [];
    this.saveToLocalStorage();
  }

  updateProductCount(name: string, count: number) {
    const product = this.cart.find(item => item.name === name);
    if (product) {
      product.count = count;
      if (product.count <= 0) {
        this.removeFromCart(name);
      } else {
        this.saveToLocalStorage();
      }
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }
  
}

export const cartStore = new CartStore();

function runInAction(action: () => void) {
    mobxRunInAction(action);
}

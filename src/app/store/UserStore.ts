import { makeAutoObservable } from 'mobx';

interface IUser {
  id: string;
  name: string;
  email: string;
  // Добавьте другие необходимые поля пользователя
}

class UserStore {
  user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  saveToLocalStorage() {
    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.removeItem('user');
    }
  }

  setUser(user: IUser) {
    this.user = user;
    this.saveToLocalStorage();
  }

  clearUser() {
    this.user = null;
    this.saveToLocalStorage();
  }

  get isLoggedIn() {
    return this.user !== null;
  }

  get userId() {
    return this.user?.id || null;
  }

  // Метод для обновления данных пользователя
  updateUser(updates: Partial<IUser>) {
    if (this.user) {
      this.user = { ...this.user, ...updates };
      this.saveToLocalStorage();
    }
  }
}

export const userStore = new UserStore();
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  isLocalStorageSupported!: boolean;
  localStorage!: Storage;

  constructor() {
    this.isLocalStorageSupported =
      typeof window['localStorage'] != 'undefined' &&
      window['localStorage'] != null;
    if (this.isLocalStorageSupported) this.localStorage = window.localStorage;
  }

  get<T>(key: string): T | null {
    if (!this.isLocalStorageSupported) return null;

    let item: string | null = this.localStorage.getItem(key);
    let result: T | null = item ? JSON.parse(item) : null;
    return result;
  }

  set(key: string, value: any) {
    if (!this.isLocalStorageSupported) return;

    this.localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    if (!this.isLocalStorageSupported) return;

    this.localStorage.removeItem(key);
    return false;
  }
}

import { Injectable, signal } from '@angular/core';
import { Producto } from '../../products/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';

  // señal con los productos del carrito
  private _cart = signal<Producto[]>(JSON.parse(localStorage.getItem(this.storageKey) || '[]'));

  cart = this._cart; // exportamos la señal

  getCart(): Producto[] {
    return this._cart();
  }

  addProduct(product: Producto) {
    const cart = [...this._cart(), product];
    this._cart.set(cart);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  removeProduct(index: number) {
    const cart = [...this._cart()];
    cart.splice(index, 1);
    this._cart.set(cart);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}

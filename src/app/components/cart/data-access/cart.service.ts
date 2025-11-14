import { Products } from './../../products/models/product.interface';
import { computed, Injectable, signal } from '@angular/core';

import { Envio } from '../../../pages/pay/models/envio';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';


  private _cart = signal<Products[]>(JSON.parse(localStorage.getItem(this.storageKey) || '[]'));
  private _metodoEnvio = signal<Envio>(Envio.STANDARD);
  cart = this._cart;


  getCart(): Products[] {
    return this._cart();
  }

  subTotal = computed(() =>
    this.cart().reduce((sum, p) => sum + Number(p.precio), 0)
  );

  envio = computed(() => {
    const subtotal = this.subTotal();
    const metodo = this._metodoEnvio()
    if (subtotal > 100000 && metodo === Envio.STANDARD) return 0;
    if (metodo === Envio.EXPRESS) return 8000;
    return 4500;
  });

  metodoEnvio = computed(() => this._metodoEnvio());

  addProduct(product: Products) {
    const cart = [...this._cart(), product];
    this._cart.set(cart);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  removeProduct(id: number) {
    const cart = this._cart();
    const updatedCart = cart.filter(item => item.id !== id);

    this._cart.set(updatedCart);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedCart));
  }

  clearCart(): void {
    this._cart.set([]);

    localStorage.removeItem(this.storageKey);
  }

  setMetodoEnvio(metodo: Envio) {
    this._metodoEnvio.set(metodo);
  }


}

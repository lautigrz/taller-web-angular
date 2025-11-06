import { Products } from './../../products/models/product.interface';
import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../../products/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';


  private _cart = signal<Products[]>(JSON.parse(localStorage.getItem(this.storageKey) || '[]'));

  cart = this._cart; 

  getCart(): Products[] {
    return this._cart();
  }

   subTotal = computed(() =>
    this.cart().reduce((sum, p) => sum + Number(p.precio), 0)
  );

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

    console.log("El carrito se ha vaciado.");
  }
}

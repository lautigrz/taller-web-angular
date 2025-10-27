import { Products } from "../../../products/models/product.interface";

export interface CartItem {
  producto: Products;
  cantidad: number;
  subtotal: number;
}
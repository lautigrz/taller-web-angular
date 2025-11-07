import { Products } from "../../../products/models/product.interface";

export interface CartItem {
  producto: Products;
  cantidad: number;
  subtotal: number;
}


export interface Total{
  subtotal: number;
  envio: number;
  total: number;
}
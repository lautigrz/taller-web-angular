
export interface Filter {
  deporte?: string;
  categoria?: string;
  talles?: string[];
  precioMin?: number;
  precioMax?: number;
}

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  deporte: string;
  talleDisponible: string[];
}

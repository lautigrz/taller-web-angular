export interface ProductoFormValue {
  imagen: File[] | null;
  titulo: string;
  descripcion?: string;
  equipo: string; // o string si usás id como string
  liga: string;
  color: string;
  precio: number;
  cantidad: number;
  tallasDisponibles: string[];
}

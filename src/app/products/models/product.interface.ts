export interface Producto {
    titulo: string
    descripcion: string
    precio: number
    stock: number
    imagenUrl: string
}


export interface Products {
    id:            number;
    titulo:        string;
    descripcion:   string;
    precio:        string;
    stock:         number;
    talla:         string;
    genero:        null;
    creadoEn:      Date;
    actualizadoEn: Date;
    equipoId:      number;
    equipo:        Equipo;
    imagenes:      Imagene[];
}

export interface Equipo {
    id:     number;
    name:   string;
    icon:   string;
    ligaId: number;
    liga:   Liga;
}

export interface Liga {
    id:   number;
    name: string;
    icon: string;
}

export interface Imagene {
    id:         number;
    url:        string;
    orden:      number;
    productoId: number;
}
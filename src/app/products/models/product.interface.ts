export interface Producto {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    imagenUrl: string
}


export interface Products {
    id:            number;
    nombre:        string;
    descripcion:   string;
    precio:        string;
    stock:         number;
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
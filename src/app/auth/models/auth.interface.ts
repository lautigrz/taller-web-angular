export interface RegisterUser{
    name: string,
    lastname: string,
    email: string,
    direccion: string,
    password: string,
    confirmPassword: string
}

export interface RegisterResponse{
    name: string,
    lastname: string
}

export interface LoginUser{
    email: string,
    password: string
}
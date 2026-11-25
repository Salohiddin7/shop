export interface IRegister {
    username: string;
    email: string;
    password: string;
    password2:string;
}

export interface ILogin {
    username: string;
    password: string;
}

export interface IUser {
    username: string;
    id: number;
    email: string;
    avatar: null | string;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    price: string;
    quantity:number;
}
// src/types.ts
export interface Shop {
    id: number;
    name: string;
    ownerId: number;
}

export interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
    dateCreated: string;
    shopName: string;
}

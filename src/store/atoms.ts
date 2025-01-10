import { atom } from "jotai";

// this is where all the global states will be stored

export const countAtom = atom(0);

interface User 
{
    userId: number,
    firstName: string, 
    lastName: string, 
    email: string,
    roleName: string,
    isAdmin: boolean
}

export const userAtom = atom<User | null>(null);
export const themeAtom = atom('light');


export interface Hotel {
  hotel_id: number;
  hotel_name: string;
  description: string;
  rooms: number;
  location: string;
  price: number;
  image: string;
}

export const hotelAtom = atom<Hotel | null>(null);
import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import { atom } from "jotai";

// this is where all the global states will be stored
// loading hotels when program starts

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
  hotelId: number;
  hotelName: string;
  description: string;
  rooms: number;
  location: string;
  price: number;
  image: string;
}

export const hotelAtom = atom<Hotel | null>(null);
export const allHotelsAtom = atom<Hotel[]>([]);
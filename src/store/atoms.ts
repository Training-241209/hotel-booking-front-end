import { atom } from "jotai";

// this is where all the global states will be stored
// loading hotels when program starts

export const countAtom = atom(0);
export const themeAtom = atom('light');


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


export interface Reservation
{
  reservationId: number;
  checkInTime: string;
  checkOutTime: string;
}

export const reserveAtom = atom<Reservation | null>(null);
export const allReserveAtom = atom<Reservation[]>([]);
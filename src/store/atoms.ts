import { atom } from 'jotai';

// this is where all the global states will be stored

export const countAtom = atom(0);
export const userAtom = atom({ name: '', age: 0 });
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

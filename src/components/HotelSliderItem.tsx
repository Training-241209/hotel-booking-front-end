import React from 'react';
import { useAtom } from 'jotai';
import { hotelAtom } from '@/store/atoms';

interface HotelSliderItemProps {
    hotel_id: number;
    hotel_name: string;
    description: string;
    rooms: number;
    location: string;
    price: number;
    image: string;
}

export default function HotelSliderItem({
    hotel_id,
    hotel_name,
    description,
    rooms,
    location,
    price,
    image,
}: HotelSliderItemProps) {
    const [, setHotel] = useAtom(hotelAtom);

    const handleSelect = () => {
        setHotel({ hotel_id, hotel_name, description, rooms, location, price, image });
    };

    return (
        <div className="relative cursor-pointer rounded-md" onClick={handleSelect}>
            <img src={image} alt={hotel_name} className="w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                <h1 className="font-bold text-lg">{hotel_name}</h1>
                <p className="text-sm">{location}</p>
            </div>
        </div>
    );
}

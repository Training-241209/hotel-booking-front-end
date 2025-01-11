import React from "react";
import { useAtom } from "jotai";
import { hotelAtom } from "@/store/atoms";

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
    setHotel({
      hotel_id,
      hotel_name,
      description,
      rooms,
      location,
      price,
      image,
    });
  };

  return (
    <div className="relative cursor-pointer rounded-md" onClick={handleSelect}>
      <img src={image} alt={hotel_name} className="h-auto w-full rounded-md" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white rounded">
        <h1 className="text-lg font-bold">{hotel_name}</h1>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}

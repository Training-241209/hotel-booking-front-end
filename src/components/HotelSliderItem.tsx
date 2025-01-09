import React from 'react'

interface HotelSliderItemProps {
    hotel_id: number;
    hotel_name: string;
    description: string;
    rooms: number;
    location: string;
    price: number;
    image: string;
    rating: number;
}

export default function HotelSliderItem({  
    hotel_id,
    hotel_name,
    description,
    rooms,
    location,
    price,
    image,
    rating
}:HotelSliderItemProps) {
  return (
    <div className='relative'>
      <img src={image} alt={hotel_name} />
      <div className="absolute bottom-0 m-1 text-white">
        <h1 className='font-bold'>{hotel_name}</h1>
        <p>{location}</p>
      </div>
    </div>
  )
}

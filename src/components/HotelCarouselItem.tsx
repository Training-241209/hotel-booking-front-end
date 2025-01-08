import React from 'react';

interface HotelCarouselItemProps {
  image: string;
  name: string;
}

export default function HotelCarouselItem({ image, name }: HotelCarouselItemProps) {
  return (
    <div className="flex hotel-carousel-item w-1/6 h-[200px] relative">
      <img src={image} alt={name} className="hotel-image object-fill w-full h-full" />
      <h3 className="hotel-name absolute text-white bottom-0 m-1">{name}</h3>
    </div>
  );
}

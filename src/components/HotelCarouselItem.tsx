import React from "react";

interface HotelCarouselItemProps {
  image: string;
  name: string;
}

export default function HotelCarouselItem({
  image,
  name,
}: HotelCarouselItemProps) {
  return (
    <div className="hotel-carousel-item relative flex h-[200px] w-1/6">
      <img
        src={image}
        alt={name}
        className="hotel-image h-full w-full object-fill"
      />
      <h3 className="hotel-name absolute bottom-0 m-1 text-white">{name}</h3>
    </div>
  );
}

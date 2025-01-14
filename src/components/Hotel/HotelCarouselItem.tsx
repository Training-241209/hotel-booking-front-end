interface HotelCarouselItemProps {
  image: string;
  name: string;
}

export default function HotelCarouselItem({
  image,
  name,
}: HotelCarouselItemProps) {
  return (
    <div className="hotel-carousel-item relative rounded-md">
      <img
        src={image}
        alt={name}
        className="hotel-image h-full w-full object-cover rounded-md"
      />
      <h3 className="hotel-name absolute bottom-0 m-1 text-white">{name}</h3>
    </div>
  );
}

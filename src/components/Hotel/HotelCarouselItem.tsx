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
        className="hotel-image rounded-md object-cover sm:max-h-[200px] sm:min-h-[200px] sm:min-w-[200px] sm:max-w-[200px] md:max-h-[300px] md:min-h-[300px] md:min-w-[300px] md:max-w-[300px] xs:max-h-[200px] xs:min-h-[200px] xs:min-w-[200px] xs:max-w-[200px] xxs:max-h-[150px] xxs:min-h-[150px] xxs:min-w-[150px] xxs:max-w-[150px]"
      />
      <h3 className="hotel-name absolute bottom-0 m-1 text-white">{name}</h3>
    </div>
  );
}

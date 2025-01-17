interface HotelCarouselItemProps {
  image: string;
  name: string;
}

export default function HotelCarouselItem({
  image,
  name,
}: HotelCarouselItemProps) {
  return (
    <div
      className="hotel-carousel-item relative rounded-md bg-red-50 xxs:h-[75px] xxs:w-[75px] 
        xs:h-[100px] xs:w-[100px]
        md:h-[150px] md:w-[150px]
        lg:h-[200px] lg:w-[200px]
        2xl:h-[300px] 2xl:w-[300px]
      "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="hotel-name absolute bottom-0 m-1 text-white xxs:hidden">{name}</h3>
    </div>
  );
}

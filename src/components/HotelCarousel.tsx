import HotelCarouselItem from './HotelCarouselItem';

interface Hotel {
  name: string;
  description: string;
  image: string;
}

const hotels: Hotel[] = [
    {
      name: "Hotel Paradise",
      description: "A luxurious escape",
      image: "https://digital.ihg.com/is/image/ihg/ckvcv-garner-clarksville-northeast-exterior-sunset",
    },
    {
      name: "Ocean Breeze Resort",
      description: "Relax by the beach",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/156652899.webp?k=937c75fbc8385fd741f03ea93289253d0f1f664bb47fd5efc6e2bfb6e7d0ac6a&o=",
    },
    {
      name: "Mountain View Lodge 1",
      description: "Enjoy stunning mountain views",
      image: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    },
    {
      name: "Mountain View Lodge 2",
      description: "Explore nature from the comfort of your room",
      image: "https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg",
    },
    {
      name: "Mountain View Lodge 3",
      description: "Your gateway to the mountains",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2IQppTtdNT6BG0Vy_wELy-z8NsiEfkCGSw&s",
    },
  ];
  

export default function HotelCarousel() {
  return (
    <div className='w-screen flex px-36 justify-center gap-3'>
      {hotels.map((hotel) => (
        <HotelCarouselItem key={hotel.name} name={hotel.name} image={hotel.image} />
      ))}
    </div>
  );
}

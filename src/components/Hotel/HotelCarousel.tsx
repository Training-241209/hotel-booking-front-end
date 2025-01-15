import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelCarouselItem from "./HotelCarouselItem";
import { useAtom } from "jotai";
import { allHotelsAtom } from "@/store/atoms";

export default function HotelCarousel() 
{
  useAllHotels();
  const [hotels] = useAtom(allHotelsAtom);
  const displayed = hotels.slice(0, 6);

  return (
    <>
      <h1 className="col-start-4 col-end-8 row-start-7 text-center font-bold text-[#022b60] text-2xl mb-2">
        Check out some of our hotels
      </h1>
      <div className="grid xs:grid-cols-3 md:grid-cols-6 gap-3">
        {displayed.map((hotel) => (
          <HotelCarouselItem
            key={hotel.hotelId}
            name={hotel.hotelName}
            image={hotel.image}
          />
        ))}
      </div>
    </>
  );
}

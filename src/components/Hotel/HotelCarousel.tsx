import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelCarouselItem from "./HotelCarouselItem";
import { useAtom } from "jotai";
import { allHotelsAtom, blueAtom } from "@/store/atoms";
import { useEffect } from "react";

export default function HotelCarousel() {
  useAllHotels();
  const [hotels] = useAtom(allHotelsAtom);
  const displayed = hotels.slice(0, 6);

  const [, setBlue] = useAtom(blueAtom);

  useEffect(() => {
    setBlue(false);
  }, []);

  return (
    <>
      <h1 className="col-start-4 col-end-8 row-start-7 mb-2 text-center text-2xl font-bold text-white">
        Check out some of our hotels
      </h1>
      <div className="grid gap-3 md:grid-cols-6 xs:grid-cols-3">
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

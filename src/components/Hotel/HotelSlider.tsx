import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelSliderItem from "./HotelSliderItem";
import { useAtom } from "jotai";
import { allHotelsAtom, hotelAtom, hotelIdAtom } from "@/store/atoms";
import { useEffect } from "react";

// console.log(hotels[0]);

export default function HotelSlider() {
  useAllHotels();
  const [hotels] = useAtom(allHotelsAtom);
  const [hotel, setHotel] = useAtom(hotelAtom);
  const setHotelId = useAtom(hotelIdAtom)[1];

  useEffect(() =>
  {
    if (!hotel && hotels.length > 0)
    {
      const defaultHotel = hotels[0];
      setHotel(defaultHotel);
      setHotelId(defaultHotel.hotelId);
    }
  }, [hotel, setHotel, hotels, setHotelId]);

  return (
    <div className="scrollbar-hidden flex flex-col gap-2 overflow-y-auto rounded-md xs:flex-row xs:overflow-x-auto">
      {hotels.map((hotel) => (
        <HotelSliderItem key={hotel.hotelId}  {...hotel} />
      ))}
    </div>
  );
}

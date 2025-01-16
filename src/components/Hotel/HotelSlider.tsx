import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelSliderItem from "./HotelSliderItem";
import { useAtom } from "jotai";
import {
  allHotelsAtom,
  filterHotelAtom,
  firstFilteredHotelAtom,
  hotelAtom,
  hotelIdAtom,
} from "@/store/atoms";
import { useEffect } from "react";

// console.log(hotels[0]);

export default function HotelSlider() {
  useAllHotels();
  const [hotels] = useAtom(allHotelsAtom);
  const [hotel, setHotel] = useAtom(hotelAtom);
  const setHotelId = useAtom(hotelIdAtom)[1];
  const [filterHotel] = useAtom(filterHotelAtom);
  const [firstFilteredHotel, setFirstFilteredHotel] = useAtom(
    firstFilteredHotelAtom,
  );

  const filteredHotels = hotels.filter((hotel) =>
    hotel.hotelName.toLowerCase().includes(filterHotel.toLowerCase()),
  );

  console.log(firstFilteredHotel);

  useEffect(() => {
    if (!hotel && hotels.length > 0) {
      const defaultHotel = hotels[0];
      setHotel(defaultHotel);
      setHotelId(defaultHotel.hotelId);
    }
    if (filteredHotels.length > 0) {
      setFirstFilteredHotel(filteredHotels[0]);
    } else {
      setFirstFilteredHotel(null);
    }
  }, [hotel, setHotel, hotels, setHotelId, filteredHotels]);

  return (
    <div className="scrollbar-hidden flex flex-col gap-2 overflow-y-auto rounded-md xs:flex-row xs:overflow-x-auto">
      {(filterHotel ? filteredHotels : hotels).map((hotel) => (
        <HotelSliderItem key={hotel.hotelId} {...hotel} />
      ))}
    </div>
  );
}

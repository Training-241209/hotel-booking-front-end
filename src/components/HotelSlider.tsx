import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelSliderItem from "./HotelSliderItem";
import { useAtom } from "jotai";
import { allHotelsAtom } from "@/store/atoms";

// console.log(hotels[0]);

export default function HotelSlider() {
  useAllHotels();
  const [hotels] = useAtom(allHotelsAtom);

  return (
    <div className="scrollbar-hidden flex flex-col gap-2 overflow-y-auto rounded-md xs:flex-row xs:overflow-x-auto">
      {hotels.map((hotel) => (
        <HotelSliderItem key={hotel.hotelId} {...hotel} />
      ))}
    </div>
  );
}

import { useAllHotels } from "@/hooks/hotels/use-all-hotels";
import HotelSliderItem from "./HotelSliderItem";
import { useAtom } from "jotai";
import {
  allHotelsAtom,
  filteredHotelsAtom,
  filterWordAtom,
  Hotel,
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
  const [filterWord] = useAtom(filterWordAtom);
  const [filtered, setFilteredHotels] = useAtom(filteredHotelsAtom);

  const filteredHotels = filterWord
    ? hotels.filter(
        (hotel) =>
          hotel.hotelName.toLowerCase().includes(filterWord.toLowerCase()) ||
          hotel.location.toLowerCase().includes(filterWord.toLowerCase()),
      )
    : hotels; // Return all hotels if filterWord is null

  const filterHotels = (data: Hotel[], word: string) => {
    if (word === "") return [];

    return data.filter(
      (dataItem) =>
        dataItem.hotelName.toLowerCase().includes(word.toLowerCase()) ||
        dataItem.location.toLowerCase().includes(word.toLowerCase()),
    );
  };

  console.log({ filtered });
  useEffect(() => {
    if (!hotel && hotels.length > 0) {
      const defaultHotel = hotels[0];
      setHotel(defaultHotel);
      setHotelId(defaultHotel.hotelId);
      if (filterWord) {
        setFilteredHotels(filterHotels(hotels, filterWord));
      }
    } else {
      if (filterWord) {
        setFilteredHotels(filterHotels(hotels, filterWord));
      }
    }
  }, [hotel, setHotel, hotels, setHotelId, setFilteredHotels]);

  return (
    <div className="scrollbar-hidden flex flex-col gap-2 overflow-y-auto rounded-md xs:flex-row xs:overflow-x-auto">
      {(filterWord ? filteredHotels : hotels).map((hotel) => (
        <HotelSliderItem key={hotel.hotelId} {...hotel} />
      ))}
    </div>
  );
}

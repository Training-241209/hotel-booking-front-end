import hotels from "../../hoteldata.json";
import HotelSliderItem from "./HotelSliderItem";

console.log(hotels[0]);

export default function HotelSlider() {
  return (
    <div className="scrollbar-hidden flex flex-col gap-2 overflow-y-auto rounded-md">
      {hotels.map((hotel) => (
        <HotelSliderItem key={hotel.hotel_id} {...hotel} />
      ))}
    </div>
  );
}

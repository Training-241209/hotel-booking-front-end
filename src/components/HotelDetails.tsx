import { hotelAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

export default function HotelDetails() {
  const [hotel] = useAtom(hotelAtom);

  if (!hotel) {
    return (
      <h1 className="flex h-full w-full items-center justify-center text-xl font-bold shadow-md">
        Please select a hotel
      </h1>
    );
  }

  return (
    <>
      <div className="hotel__title flex h-10 items-center justify-between">
        <h1 className="text-2xl font-bold text-[#022b60]">
          {hotel?.hotel_name}
        </h1>
        {/* Hard coded need to change later */}
        <span className="hotel__ratings flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-[#022b60]">4.5</span>
          <Star fill="#022b60" />
        </span>
      </div>
      <div className="hotel__image h-3/5 w-full">
        <img
          src={hotel?.image}
          alt={hotel?.hotel_name}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="hotel__info mt-3 flex h-1/5 flex-col justify-center gap-3">
        <div className="hotel__info__description">
          <span className="text-lg font-bold">Description</span>:{" "}
          {hotel?.description}
        </div>
        <div className="hotel__info__rooms">
          <span className="text-lg font-bold">Rooms Available</span>:{" "}
          {hotel?.rooms}
        </div>
        <div className="hotel__info__price">
          <span className="text-lg font-bold">Room Price</span>: ${hotel?.price}
        </div>
        <Button className="bg-blue-500 hover:bg-blue-500 hover:opacity-75">
          Book Now
        </Button>
      </div>
      <div className="hotel__review flex h-1/5 items-center justify-center bg-slate-50">
        Review Section Under Development
      </div>
    </>
  );
}

import { hotelAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { Star } from "lucide-react";
import { BookHotelDialog } from "./BookHotelDialog";
import { Button } from "./ui/button";
import { DeleteHotelDialog } from "./DeleteHotelDialog";
import { UpdateHotelDialog } from "./UpdateHotelDialog";
import ReviewDetails from "./ReviewDetails";

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
    <div className="grid h-full w-full grid-rows-8">
      <div className="hotel__image row-span-5 w-full">
        <img
          src={hotel?.image}
          alt={hotel?.hotel_name}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="row-span-2 grid grid-cols-6">
        <div className="hotel__info col-span-4 flex flex-col gap-3">
          <div className="hotel__info__title mt-3 flex flex-col items-start justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[#022b60]">
                {hotel?.hotel_name.toUpperCase()}
              </h1>
              <h2 className="border-l-2 border-[#022b60] pl-3 text-3xl font-bold text-[#022b60]">
                {hotel.location.toUpperCase()}
              </h2>
            </div>
            <p className="text-[#022b60]">{hotel?.description}</p>
          </div>
          <div className="grid w-full grid-cols-9 grid-rows-1">
            <div className="col-span-7 flex flex-col justify-evenly">
              <div className="hotel__info__rooms">
                <span className="text-md font-bold">Rooms Available</span>:{" "}
                {hotel?.rooms}
              </div>
              <div className="hotel__info__price">
                <span className="text-md font-bold">Room Price</span>: $
                {hotel?.price}
              </div>
            </div>
            <div className="hotel__info__buttons col-span-2 flex flex-col gap-3">
              <UpdateHotelDialog />
              <DeleteHotelDialog />
            </div>
          </div>
        </div>
        <div className="hotel__cta border-grey col-span-2 flex flex-col items-center justify-evenly border-l-2">
          <div className="flex w-full flex-col items-center">
            <div className="hotel__cta__ratings flex w-1/2 items-center justify-center">
              {/* Hard coded need to change later */}
              <span className="text-6xl font-bold text-[#022b60]">4.5</span>
              <Star
                fill="#022b60"
                color="#022b60"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="hotel__cta__reviews text-[#022b60]">
              (334 Reviews)
            </div>
          </div>
          <BookHotelDialog />
        </div>
      </div>

      <div className="hotel__review row-span-1">
        <ReviewDetails />
      </div>
    </div>
  );
}

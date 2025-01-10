import { hotelAtom } from "@/store/atoms";
import { useAtom } from "jotai";

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
        <h1 className="text-xl font-bold">{hotel?.hotel_name}</h1>
        {/* Hard coded need to change later */}
        <span className="hotel__ratings">4.5 Stars</span>
      </div>
      <div className="hotel__image h-3/5 w-full">
        <img
          src={hotel?.image}
          alt={hotel?.hotel_name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hotel__info mt-3 flex h-1/5 flex-col justify-center gap-3">
        <div className="hotel__info__description">
          Description: {hotel?.description}
        </div>
        <div className="hotel__info__rooms">
          Rooms Available: {hotel?.rooms}
        </div>
        <div className="hotel__info__price">Room Price: ${hotel?.price}</div>
      </div>
      <div className="hotel__review flex h-1/5 items-center justify-center bg-slate-50">
        Review Section Under Development
      </div>
    </>
  );
}

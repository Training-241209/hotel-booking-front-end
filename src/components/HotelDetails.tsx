import { hotelAtom } from "@/store/atoms";
import { useAtom } from "jotai";

export default function HotelDetails() {
  const [hotel] = useAtom(hotelAtom);

  if (!hotel) {
    return (
      <h1 className="text-xl font-bold w-full h-full flex justify-center items-center shadow-md">Please select a hotel</h1>
    );
  }

  return (
    <>
      <div className="hotel__title flex justify-between h-10 items-center">
        <h1 className="font-bold text-xl">{hotel?.hotel_name}</h1>
        {/* Hard coded need to change later */}
        <span className="hotel__ratings">4.5 Stars</span>
      </div>
      <div className="hotel__image w-full h-3/5">
        <img
          src={hotel?.image}
          alt={hotel?.hotel_name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="hotel__info mt-3 h-1/5 flex flex-col gap-3 justify-center">
        <div className="hotel__info__description">
          Description: {hotel?.description}
        </div>
        <div className="hotel__info__rooms">
          Rooms Available: {hotel?.rooms}
        </div>
        <div className="hotel__info__price">Room Price: ${hotel?.price}</div>
      </div>
      <div className="hotel__review h-1/5 bg-slate-50 flex justify-center items-center">
        Review Section Under Development
      </div>
    </>
  );
}

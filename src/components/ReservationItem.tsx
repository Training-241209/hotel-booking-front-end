import { useAtom, useSetAtom } from "jotai";
import { DeleteReservationDialog } from "./DeleteReservationDialog";
import { UpdateReservationDialog } from "./UpdateReservationDialog";
import { Hotel, reserveAtom, userAtom } from "@/store/atoms";

interface ReservationProps {
  reservationId: number;
  hotel: Hotel;
  checkInTime: string;
  checkOutTime: string;
}

export default function ReservationItem({
  reservationId,
  hotel,
  checkInTime,
  checkOutTime,
}: ReservationProps) {

  const setReserve = useSetAtom(reserveAtom);
  const [user] = useAtom(userAtom);

  const handleDel = () =>
  {
    setReserve({
      reservationId,
      hotel,
      checkInTime,
      checkOutTime
    })
  }

  return (
    <div className="reservation mx-auto mb-3 grid h-2/5 w-3/4 grid-cols-5 p-3 shadow-md">
      <div className="reservation__image col-span-2 flex h-full items-center justify-center bg-blue-50">
        <img src={hotel.image} alt="hotel image" />
      </div>
      <div className="reservation__details col-span-3 grid h-full grid-cols-3 grid-rows-4 border px-3">
        <div className="reservation__details__head border-grey col-span-3 flex items-center justify-between border-b-2 px-3">
          <h1 className="reservation__details__hotel_name">
            {/* Hotel Name */}
            {hotel.hotelName}
          </h1>
          <div className="reservation__details__guess_name">{user?.firstName} {user?.lastName}</div>
        </div>
        <div className="reservation__details__info col-span-2 row-span-3 py-3">
          <div className="reservation__details__info__location px-3">
            Location: {hotel.location}
          </div>
          <div className="item grid grid-cols-2 px-3 pt-3">
            <div className="reservation__details__info__checkin">
              <h3>Checkin:</h3>
              <h3>{checkInTime.substring(0, 10)}</h3>
            </div>
            <div className="reservation__details__info__checkout">
              <h3>Checkout:</h3>
              <h3>{checkOutTime.substring(0, 10)}</h3>
            </div>
          </div>
        </div>
        <div className="reservation__details__buttons border-grey row-span-3 flex flex-col items-center justify-center gap-3 border-l-2">
          <UpdateReservationDialog/>
          <DeleteReservationDialog onDelete={handleDel}/>
        </div>
      </div>
    </div>
  );
}

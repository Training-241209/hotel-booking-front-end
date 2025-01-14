import { DeleteReservationDialog } from "./DeleteReservationDialog";
import { UpdateReservationDialog } from "./UpdateReservationDialog";

interface ReservationProps {
  reserve_id: number;
  check_in_time: string;
  check_out_time: string;
  user_id_fk: number;
  hotel_id_fk: number;
}

export default function ReservationItem({
  reserve_id,
  check_in_time,
  check_out_time,
  user_id_fk,
  hotel_id_fk,
}: ReservationProps) {
  return (
    <div className="reservation mx-auto mb-3 grid h-2/5 xl:w-3/4 grid-cols-5 p-3 shadow-md lg:w-full">
      <div className="reservation__image col-span-2 flex h-full items-center justify-center bg-blue-50">
        <h1>Get the image for hotel somehow</h1>
      </div>
      <div className="reservation__details col-span-3 grid h-full grid-cols-3 grid-rows-4 border px-3">
        <div className="reservation__details__head border-grey col-span-3 flex items-center justify-between border-b-2 px-3">
          <h1 className="reservation__details__hotel_name">Hotel Name</h1>
          <div className="reservation__details__guess_name">Guess Name</div>
        </div>
        <div className="reservation__details__info col-span-2 row-span-3 py-3 xxs:col-span-3 xxs:row-span-2">
          <div className="reservation__details__info__location px-3">
            Location: Hotel Location
          </div>
          <div className="item grid grid-cols-2 px-3 pt-3">
            <div className="reservation__details__info__checkin">
              <h3>Checkin:</h3>
              <h3>{check_in_time}</h3>
            </div>
            <div className="reservation__details__info__checkout">
              <h3>Checkout:</h3>
              <h3>{check_out_time}</h3>
            </div>
          </div>
        </div>
        <div className="reservation__details__buttons border-grey row-span-3 flex flex-col items-center justify-center gap-3 border-l-2 xxs:border-none xxs:flex-row xxs:col-span-3">
          <UpdateReservationDialog/>
          <DeleteReservationDialog/>
        </div>
      </div>
    </div>
  );
}

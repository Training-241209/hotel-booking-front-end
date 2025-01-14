import ReservationItem from "@/components/ReservationItem";
import { createFileRoute } from "@tanstack/react-router";
import reservationData from "../../../reservationdata.json";

export const Route = createFileRoute("/_main/ReservationPage")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="col-span-full row-start-2 row-end-13">
      <div className="scrollbar-hidden h-full w-full overflow-y-auto p-3 shadow-md xxs:p-0">
        {reservationData.map((reservation) => (
          <ReservationItem key={reservation.reserve_id} {...reservation} />
        ))}
      </div>
    </div>
  );
}

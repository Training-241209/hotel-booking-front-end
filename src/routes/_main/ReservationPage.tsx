import ReservationItem from "@/components/ReservationItem";
import { createFileRoute } from "@tanstack/react-router";
import reservationData from "../../../reservationdata.json";

export const Route = createFileRoute("/_main/ReservationPage")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-center px-36 py-10">
      <h1 className="mb-3 text-3xl font-bold text-[#022b60] underline">
        My Reservations
      </h1>
      <div className="scrollbar-hidden h-full w-full overflow-y-auto p-3 shadow-md">
        {reservationData.map((reservation) => (
          <ReservationItem key={reservation.reserve_id} {...reservation} />
        ))}
      </div>
    </div>
  );
}

import ReservationItem from "@/components/ReservationItem";
import { createFileRoute } from "@tanstack/react-router";
import { useAllReserves } from "@/hooks/reservations/use-all-user-reserves";
import { useAtom } from "jotai";
import { allReserveAtom } from "@/store/atoms";

export const Route = createFileRoute("/_main/ReservationPage")({
  component: RouteComponent,
});

function RouteComponent() {
  useAllReserves();
  const [reservations] = useAtom(allReserveAtom);

  console.log(reservations);

  return (
    <div className="col-span-full row-start-2 row-end-13">
      <h1 className="mb-3 text-3xl font-bold text-[#022b60] underline">
        My Reservations
      </h1>
      <div className="scrollbar-hidden h-full w-full overflow-y-auto p-3 shadow-md">
        {reservations.map((reservation) => (
          <ReservationItem key={reservation.reservationId} 
          {...reservation} />
        ))}
      </div>
    </div>
  );
}
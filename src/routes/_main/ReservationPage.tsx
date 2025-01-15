import ReservationItem from "@/components/ReservationItem";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useAllReserves } from "@/hooks/reservations/use-all-user-reserves";
import { useAtom } from "jotai";
import { allReserveAtom, blueAtom, userAtom } from "@/store/atoms";
import { useEffect } from "react";

export const Route = createFileRoute("/_main/ReservationPage")({
  component: RouteComponent,
});

function RouteComponent() {
  const [checkUser] = useAtom(userAtom);
  const router = useRouter();

  if (checkUser === null) {
    router.navigate({ to: "/" });
  }

  useAllReserves();
  const [reservations] = useAtom(allReserveAtom);

  console.log(reservations);

  const [, setBlue] = useAtom(blueAtom);

  useEffect(() => {
    setBlue(true);
  }, []);

  return (
    <div className="col-span-full row-start-2 row-end-13 xxs:row-start-1">
      <div className="scrollbar-hidden h-full w-full overflow-y-auto p-3 xxs:p-0">
        {reservations.map((reservation) => (
          <ReservationItem key={reservation.reservationId} {...reservation} />
        ))}
      </div>
    </div>
  );
}

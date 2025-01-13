import HotelSlider from "@/components/HotelSlider";
import { createFileRoute } from "@tanstack/react-router";
import HotelDetails from "@/components/HotelDetails";

export const Route = createFileRoute("/_main/HomePage")({
  component: RouteComponent,
});

function RouteComponent() {
  // check the store folder to see all my global states - these are states that can accessed anywhere in our app
  // const [hotel, setHotel] = useAtom(hotelAtom);

  return (
    <div className="col-span-full row-start-2 row-end-13">
      <div className="grid h-full grid-cols-7 grid-rows-1 gap-3">
        <div className="col-span-2 flex justify-center rounded-md p-3 shadow-lg">
          <HotelSlider />
        </div>
        <div className="col-span-5 flex flex-col rounded-md p-3 shadow-lg">
          <HotelDetails />
        </div>
      </div>
    </div>
  );
}

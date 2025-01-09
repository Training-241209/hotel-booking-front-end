import HotelSlider from "@/components/HotelSlider";
import { createFileRoute } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { hotelAtom } from "@/store/atoms";
import HotelDetails from "@/components/HotelDetails";

export const Route = createFileRoute("/_main/HomePage")({
  component: RouteComponent,
});

function RouteComponent() {
  // check the store folder to see all my global states - these are states that can accessed anywhere in our app
  const [hotel, setHotel] = useAtom(hotelAtom);

  return (
    <div className="w-full h-[calc(100vh-6.5rem)] px-36 py-10 flex items-center flex-col">
      <div className="grid w-3/4 h-full grid-cols-5 grid-rows-1 gap-3">
        <div className="col-span-2 flex justify-center p-3 shadow-lg">
          <HotelSlider />
        </div>
        <div className="col-span-3 p-3 flex flex-col shadow-lg">
          <HotelDetails />
        </div>
      </div>
    </div>
  );
}

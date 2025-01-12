import HotelSlider from "@/components/HotelSlider";
import { createFileRoute } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { hotelAtom } from "@/store/atoms";
import HotelDetails from "@/components/HotelDetails";
import { useAllHotels } from "@/hooks/hotels/use-all-hotels";

export const Route = createFileRoute("/_main/HomePage")({
  component: RouteComponent,
});

function RouteComponent() {
  // check the store folder to see all my global states - these are states that can accessed anywhere in our app
  // const [hotel, setHotel] = useAtom(hotelAtom);

  return (
    <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-center px-36 py-10">
      <div className="grid h-full w-3/4 grid-cols-7 grid-rows-1 gap-3">
        <div className="col-span-2 flex justify-center p-3 shadow-lg rounded-md">
          <HotelSlider />
        </div>
        <div className="col-span-5 flex flex-col p-3 shadow-lg rounded-md">
          <HotelDetails />
        </div>
      </div>
    </div>
  );
}

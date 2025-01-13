import HotelCarousel from "@/components/HotelCarousel";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="col-span-full row-start-2 row-end-13 grid grid-cols-10 grid-rows-10">
      <div className="logo col-start-5 col-end-7 mx-auto row-span-2 xs:col-start-3 xs:col-end-9 xs:row-start-2 
      md:col-start-3 md:col-end-9 md:row-start-2
      
      ">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="search_bar row-start-6 col-start-4 col-end-8 sm:col-start-3 sm:col-end-9">
        <Input
          type="text"
          placeholder="Location Search"
          className="rounded-lg shadow-sm"
        />
      </div>
      <div className="hotel_carousel row-start-7 col-start-0 col-span-full row-end-11">
        <HotelCarousel />
      </div>
    </div>
  );
}

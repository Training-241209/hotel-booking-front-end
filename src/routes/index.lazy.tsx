import HotelCarousel from "@/components/HotelCarousel";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-start pb-10">
      <div className="logo mt-20">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="search_bar mt-8 w-1/2">
        <Input
          type="text"
          placeholder="Location Search"
          className="rounded-lg shadow-sm"
        />
      </div>
      <h1 className="mb-2 mt-24 font-bold text-[#022b60]">
        Check out some of our hotels
      </h1>
      <div className="hotel_carousel flex w-screen flex-col justify-center">
        <HotelCarousel />
      </div>
    </div>
  );
}

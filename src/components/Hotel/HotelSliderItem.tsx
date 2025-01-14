import { useAtom, useSetAtom } from "jotai";
import { hotelAtom, hotelIdAtom } from "@/store/atoms";

interface HotelSliderItemProps {
  hotelId: number;
  hotelName: string;
  description: string;
  rooms: number;
  location: string;
  price: number;
  image: string;
}

export default function HotelSliderItem({
  hotelId,
  hotelName,
  description = "",
  rooms = 0,
  location = "",
  price = 0,
  image = "",
}: HotelSliderItemProps) {
  const [, setHotel] = useAtom(hotelAtom);
  const setHotelId = useSetAtom(hotelIdAtom);
  // const queryClient = useQueryClient();

  const handleSelect = () => 
  {
    setHotel({
      hotelId,
      hotelName,
      description,
      rooms,
      location,
      price,
      image,
    });

    setHotelId(hotelId);

    // queryClient.invalidateQueries({queryKey: ["reviews"]});
  };

  // console.log(hotel);

  return (
    <div className="relative cursor-pointer rounded-md xs:min-w-[150px]" onClick={handleSelect}>
      <img src={image} alt={hotelName} className="h-full w-full rounded-md" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white rounded xs:hidden">
        <h1 className="text-lg font-bold">{hotelName}</h1>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}

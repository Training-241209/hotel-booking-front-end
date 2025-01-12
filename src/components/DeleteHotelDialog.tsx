import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDelHotel } from "@/hooks/hotels/use-del-hotel";
import { hotelAtom } from "@/store/atoms";
import { useAtom } from "jotai";

export function DeleteHotelDialog() 
{
  const [hotel] = useAtom(hotelAtom);
  const del = useDelHotel();

  function delHotel()
  {
    console.log(hotel?.hotelId)
    // hotel?.hotelId;
    if (hotel?.hotelId)
    {
      console.log("Deleting hotel")
      del.mutate(hotel.hotelId);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/2 border border-red-500 bg-white text-red-500 hover:bg-white hover:opacity-75">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Hotel Deletion</DialogTitle>
          <DialogDescription>
            This action is irreversible. Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-3/4 border border-red-500 bg-red-500 text-white hover:bg-red-500 hover:opacity-75 mx-auto"
          onClick={delHotel}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

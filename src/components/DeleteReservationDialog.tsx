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

export function DeleteReservationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/2 border border-red-500 bg-white text-red-500 hover:bg-white hover:opacity-75">
          Cancel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Reservation Cancellation</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to cancel your
            reservation?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="mx-auto w-3/4 border border-red-500 bg-red-500 text-white hover:bg-red-500 hover:opacity-75">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

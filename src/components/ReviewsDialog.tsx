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

import data from "../../reviewdata.json";
import ReviewItem from "./ReviewItem";

export function ReviewsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>All Reviews</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Reviews</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {data.map((review) => (
            <ReviewItem
              key={review.review_id}
              title={review.title}
              description={review.description}
              rating={review.rating}
            />
          ))}
        </div>
        <DialogFooter>
          <Button className="mx-auto w-3/4 border" type="submit">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

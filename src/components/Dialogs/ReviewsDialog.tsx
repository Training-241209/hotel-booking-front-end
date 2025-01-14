import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import data from "../../../reviewdata.json";
import ReviewItem from "../ReviewItem";

export function ReviewsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-600 hover:opacity-75">All Reviews</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-1/2">
        <DialogHeader>
          <DialogTitle>Reviews</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-y-auto scrollbar-hidden">
          {data.map((review) => (
            <ReviewItem
              key={review.review_id}
              title={review.title}
              description={review.description}
              rating={review.rating}
              show={false}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

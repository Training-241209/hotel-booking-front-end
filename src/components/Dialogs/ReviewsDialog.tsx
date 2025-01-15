import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ReviewItem from "../ReviewItem";
import { useFetchReviewByHotel } from "@/hooks/reviews/use-fetchAllReviewByHotelId";
import { useAtom } from "jotai";
import { hotelAtom, reviewAtom } from "@/store/atoms";

export function ReviewsDialog() 
{
  const [hotel] = useAtom(hotelAtom);
  useFetchReviewByHotel(hotel?.hotelId);
  
  const [reviews] = useAtom(reviewAtom);

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
          {Array.isArray(reviews) && reviews.map((review) => (
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

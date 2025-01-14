import { useHotelReviews } from "@/hooks/reviews/use-hotel-reviews";
import ReviewItem from "./ReviewItem";
import { useAtom } from "jotai";
import { allHotelReviewsAtom, hotelAtom} from "@/store/atoms";

interface ReviewDetailsProps{
  title:string;
  description:string;
  rating: number;
}

export default function ReviewDetails({title,description,rating}:ReviewDetailsProps) {
  
  return (
    <div className="flex h-full flex-col">
      <h1 className="font-bold">Most Recent Review</h1>
      <ReviewItem title={title} description={description} rating={rating} show={true}/>
    </div>
  );
}
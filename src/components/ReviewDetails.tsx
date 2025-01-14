import { useHotelReviews } from "@/hooks/reviews/use-hotel-reviews";
import ReviewItem from "./ReviewItem";
import { useAtom } from "jotai";
import { allHotelReviewsAtom, hotelAtom} from "@/store/atoms";

export default function ReviewDetails() 
{
  // useHotelReviews();

  const [allReviews] = useAtom(allHotelReviewsAtom);
  // const [hotel] = useAtom(hotelAtom);
  // const [reviews] = useAtom(reviewAtom);
  // allReviews[0].title ||
  // <ReviewItem title={"Title Missing"} description={"Good time with Family"} rating={5} show={true}/>
  // console.log(`current hotel: ${hotel?.hotelId}`);

  const latestReview = allReviews.length > 0 ? allReviews[0] : null;
  
  return (
    <div className="flex h-full flex-col">
      <h1 className="font-bold">Most Recent Review</h1>
      {latestReview ? 
      (
        <ReviewItem title={latestReview.title} description={latestReview.description} rating={latestReview.rating} show={true}/>
      ) :
      (
        <p>No Reviews Available</p>
      )
      }
    </div>
  );
}
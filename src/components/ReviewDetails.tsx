import ReviewItem from "./ReviewItem";

interface ReviewDetailsProps{
  reviewId: number;
  title:string;
  description:string;
  rating: number;
}

export default function ReviewDetails({reviewId,title,description,rating}:ReviewDetailsProps) {
  
  return (
    <div className="flex h-full flex-col">
      <h1 className="font-bold">Most Recent Review</h1>
      <ReviewItem reviewId={reviewId} title={title} description={description} rating={rating} show={true}/>
    </div>
  );
}
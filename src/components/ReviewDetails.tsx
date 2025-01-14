import ReviewItem from "./ReviewItem";

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

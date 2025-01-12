import ReviewItem from "./ReviewItem";

export default function ReviewDetails() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="font-bold">Most Recent Review</h1>
      <ReviewItem title={"Very Good Experience"} description={"Good time with Family"} rating={5}/>
    </div>
  );
}

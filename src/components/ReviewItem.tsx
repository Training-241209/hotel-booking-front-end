import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { ReviewsDialog } from "./Dialogs/ReviewsDialog";
import { DeleteReviewDialog } from "./Dialogs/DeleteReviewDialog";
import { UpdateReviewDialog } from "./Dialogs/UpdateReviewDialog";

// modify as needed, might have to pass in some user info to get the avatar to display properly
interface ReviewItemProps{
    title: string;
    description:string;
    rating:number;
    show:boolean;
}

export default function ReviewItem({title, description, rating, show}:ReviewItemProps) {
  return (
    <div className="grid h-full grid-cols-8 border-gray-100 border-2 rounded-md p-2">
      <div className="col-span-1 row-span-1 flex h-full items-center justify-center">
        <Avatar className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#022b60b6] text-white">
          <AvatarFallback>DZ</AvatarFallback>
        </Avatar>
      </div>
      <div className="col-span-5 row-span-1 flex flex-col justify-center pl-1">
        <h1 className="review_title font-bold">{title}</h1>
        <p className="review_description">
          {description}
        </p>
      </div>
      <div className="col-span-2 row-span-1 flex gap-2 items-center justify-end">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#022b60]">{rating}</span>
          <Star fill="#022b60" color="#022b60" className="h-[25px] w-[25px]" />
        </div>
        <DeleteReviewDialog/>
        <UpdateReviewDialog/>
        {show && <ReviewsDialog />}
      </div>
    </div>
  );
}

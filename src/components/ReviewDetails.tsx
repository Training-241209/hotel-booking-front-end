import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export default function ReviewDetails() {
  return (
    <div className="flex h-full flex-col bg-red-50">
      <h1 className="font-bold">Most Recent Review</h1>
      <div className="grid h-full grid-cols-8 bg-green-50">
        <div className="col-span-1 row-span-1 flex h-full items-center justify-center bg-orange-100">
          <Avatar className="h-[50px] w-[50px] rounded-full bg-gray-50 flex justify-center items-center">
            <AvatarFallback>DZ</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-5 row-span-1 bg-yellow-200">
            <h1 className="review_title font-bold">Review Title</h1>
            <p className="review_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos.</p>
        </div>
        <div className="col-span-2 row-span-1 bg-purple-100"></div>
      </div>
    </div>
  );
}

import { allHotelReviewsAtom, hotelAtom, hotelIdAtom, userAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { Heading1, Star } from "lucide-react";
import { DeleteHotelDialog } from "../Dialogs/DeleteHotelDialog";
import ReviewDetails from "../ReviewDetails";
import { CreateReviewDialog } from "../Dialogs/CreateReviewDialog";
import { BookHotelDialog } from "../Dialogs/BookHotelDialog";
import { UpdateHotelDialog } from "../Dialogs/UpdateHotelDialog";
import { useFetchReviewByHotel } from "@/hooks/reviews/use-fetchAllReviewByHotelId";

export default function HotelDetails() {
  const [hotel] = useAtom(hotelAtom);
  const [currentUser] = useAtom(userAtom);

  // this thing contains all the reviews for the hotel by hotelId
  const { data } = useFetchReviewByHotel(hotel?.hotelId);
  const latestReview = data ? data[data.length - 1] : null;
  console.log("Latest: ", latestReview);
  console.log("Current data: ", data);

  if (!hotel) {
    return (
      <h1 className="flex h-full w-full items-center justify-center text-xl font-bold shadow-md">
        Please select a hotel
      </h1>
    );
  }

  return (
    <div className="grid h-full w-full grid-rows-8">
      <div className="hotel__image row-span-5 w-full xs:row-span-4">
        <img
          src={hotel?.image}
          alt={hotel?.hotelName}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="row-span-2 grid grid-cols-6 xs:row-span-2">
        <div className="hotel__info col-span-4 flex flex-col gap-3">
          <div className="hotel__info__title mt-3 flex flex-col items-start justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-[#022b60] sm:text-base md:text-xl lg:text-xl 2xl:text-3xl">
                {hotel?.hotelName.toUpperCase()}
              </h1>
              <h2 className="border-l-2 border-[#022b60] pl-3 font-bold text-[#022b60] sm:text-base md:text-xl lg:text-xl 2xl:text-3xl">
                {hotel.location.toUpperCase()}
              </h2>
            </div>
            <p className="w-full text-[#022b60] xs:truncate">
              {hotel?.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-9 grid-rows-1">
            <div className="col-span-7 flex flex-col justify-evenly">
              <div className="hotel__info__rooms">
                <span className="text-md font-bold">Rooms Available</span>:{" "}
                {hotel?.rooms}
              </div>
              <div className="hotel__info__price">
                <span className="text-md font-bold">Room Price</span>: $
                {hotel?.price}
              </div>
            </div>
            {currentUser?.isAdmin ? (
              <div className="hotel__info__buttons col-span-2 flex flex-col gap-3">
                <UpdateHotelDialog />
                <DeleteHotelDialog />
              </div>
            ) : null}
          </div>
        </div>
        <div className="hotel__cta border-grey col-span-2 flex flex-col items-end justify-start gap-2">
          <div className="mt-3 flex flex-col items-center">
            <div className="hotel__cta__ratings flex w-1/2 items-center justify-center">
              {/* Hard coded need to change later */}
              <span className="font-bold text-[#022b60] md:text-3xl lg:text-4xl 2xl:text-6xl">
                4.5
              </span>
              <Star
                fill="#022b60"
                color="#022b60"
                className="md:min-h-[35px] md:min-w-[35px] lg:min-h-[40px] lg:min-w-[40px] 2xl:min-h-[50px] 2xl:min-w-[50px]"
              />
            </div>
            <div className="hotel__cta__reviews text-[#022b60]">
              (334 Reviews)
            </div>
          </div>
          <BookHotelDialog />
          <CreateReviewDialog />
        </div>
      </div>
      <div className="hotel__review row-span-1 xs:row-span-2">
        {latestReview ? (
          <ReviewDetails
            title={latestReview.title}
            description={latestReview.description}
            rating={latestReview.rating}
          />
        ) : (
          <h1>No Reviews</h1>
        )}
      </div>
    </div>
  );
}

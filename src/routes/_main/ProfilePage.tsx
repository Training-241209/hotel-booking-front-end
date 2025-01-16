import { DeleteUserDialog } from "@/components/Dialogs/DeleteUserDialog";
import { UpdatePasswordDialog } from "@/components/Dialogs/UpdatePasswordDialog";
import UpdateUserForm from "@/components/Forms/UpdateUserForm";

import { UserAvatar } from "@/components/user-avatar";
import { userAtom } from "@/store/atoms";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { EllipsisVertical } from "lucide-react";
import { useReviewByUserId } from "@/hooks/reviews/use-review-by-userId";
import ReviewItem from "@/components/ReviewItem";

export const Route = createFileRoute("/_main/ProfilePage")({
  component: RouteComponent,
});

function RouteComponent() {
  const [storedUser] = useAtom(userAtom);
  const router = useRouter();
  if (!storedUser) {
    router.navigate({ to: "/" });
    return null;
  }
  const { data } = useReviewByUserId(storedUser.userId);

  return (
    <div className="col-span-full row-start-2 row-end-13 grid text-[#022b60]">
      <div className="user__container flex flex-col gap-3 rounded">
        <div className="user__container__header relative grid grid-cols-12 items-center gap-3 rounded-md bg-white p-2 px-3 shadow-md">
          <div className="user__container__header__avatar col-start-1 flex h-[150px] w-[150px] items-center justify-center sm:col-span-4 md:col-span-3 lg:col-span-2 xs:col-span-4">
            <UserAvatar height={150} width={150} nav={false} />
          </div>
          <div className="user__container__header__details col-start-3 flex flex-col justify-center sm:col-span-5 sm:col-start-5 md:col-span-4 md:col-start-4 lg:col-span-4 xs:col-span-5 xs:col-start-5 xxs:col-span-8 xxs:col-start-6">
            <h1>
              <span className="font-bold">Email</span>: {storedUser?.email}
            </h1>
            <h1>
              <span className="font-bold">Full Name</span>:{" "}
              {storedUser?.firstName + " " + storedUser?.lastName}
            </h1>
          </div>
          <div className="col-span-2 col-start-11 flex h-full flex-col items-center justify-center gap-3 sm:col-span-4 sm:col-start-10 md:col-span-3 md:col-start-10 xs:col-span-3 xs:col-start-10 xxs:hidden xs:hidden">
            <UpdatePasswordDialog />
            <DeleteUserDialog />
          </div>
        </div>
        <Popover>
          <PopoverTrigger>
            <EllipsisVertical className="absolute right-0 top-0 m-2 mt-5 hidden scale-150 text-white xxs:flex xs:flex" />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Available Actions</h4>
                <p className="text-sm text-muted-foreground">
                  Pick an option to proceed with your next step.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UpdatePasswordDialog />
                <DeleteUserDialog />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="user__container__main grid h-3/4 w-full grid-cols-3 gap-3">
          <div className="user__container__form col-span-2 flex flex-col items-center justify-center rounded-md bg-white shadow-md xs:col-span-3 ">
            <UpdateUserForm />
          </div>
          <div className="user__container__buttons flex flex-col items-center justify-center gap-3 rounded-md bg-white shadow-md xs:col-span-3">
            {Array.isArray(data) && (
              <div className="flex flex-col max-h-[500px] overflow-y-auto gap-2 p-1 scrollbar-hidden xs:flex-row xs:overflow-x-auto xs:max-w-3/4">
                {data.map((review) => (
                  <ReviewItem
                    key={review.reviewId}
                    reviewId={review.reviewId}
                    title={review.title}
                    description={review.description}
                    rating={review.rating}
                    userFN={review.user.firstName}
                    userLN={review.user.lastName}
                    show={false}
                    userId={review.user.userId}
                    profile={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

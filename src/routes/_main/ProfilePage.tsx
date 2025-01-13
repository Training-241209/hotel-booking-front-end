import { DeleteUserDialog } from "@/components/DeleteUserDialog";
import { UpdatePasswordDialog } from "@/components/UpdatePasswordDialog";
import UpdateUserForm from "@/components/UpdateUserForm";
import { UserAvatar } from "@/components/user-avatar";
import { userAtom } from "@/store/atoms";
import { createFileRoute } from "@tanstack/react-router";
import { useAtom } from "jotai";

export const Route = createFileRoute("/_main/ProfilePage")({
  component: RouteComponent,
});

interface User {
  id: number;
  name: string;
  email: string;
}

let user: User | any = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

function RouteComponent() {
  const [storedUser] = useAtom(userAtom);
  if (!storedUser) {
    return null;
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="user__container flex h-3/4 w-3/4 flex-col gap-3 rounded p-3 shadow-lg">
        <div className="user__container__header flex h-1/4 items-center gap-3 bg-white px-3 shadow-md">
          <div className="user__container__header__avatar flex h-[150px] w-[150px] items-center justify-center">
            <UserAvatar height={150} width={150} nav={false} />
          </div>
          <div className="user__container__header__details flex flex-col justify-center">
            <h1>Email: {storedUser?.email}</h1>
            <h1>
              Full Name: {storedUser?.firstName + " " + storedUser?.lastName}
            </h1>
          </div>
        </div>
        <div className="user__container__main grid h-3/4 w-full grid-cols-3 gap-3">
          <div className="user__container__form col-span-2 flex flex-col items-center justify-center bg-white shadow-md">
            <UpdateUserForm />
          </div>
          <div className="user__container__buttons flex flex-col items-center justify-center gap-3 bg-white shadow-md">
            <UpdatePasswordDialog/>
            <DeleteUserDialog/>
          </div>
        </div>
      </div>
    </div>
  );
}

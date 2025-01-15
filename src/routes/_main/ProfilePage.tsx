import { DeleteUserDialog } from "@/components/Dialogs/DeleteUserDialog";
import { UpdatePasswordDialog } from "@/components/Dialogs/UpdatePasswordDialog";
import UpdateUserForm from "@/components/Forms/UpdateUserForm";

import { UserAvatar } from "@/components/user-avatar";
import { userAtom } from "@/store/atoms";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useAtom } from "jotai";

export const Route = createFileRoute("/_main/ProfilePage")({
  component: RouteComponent,
});

<<<<<<< HEAD
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// let user: User | any = {
//   id: 1,
//   name: "John Doe",
//   email: "john.doe@example.com",
// };

=======
>>>>>>> main
function RouteComponent() {
  const [storedUser] = useAtom(userAtom);
  const router = useRouter();
  if (!storedUser) 
  {
    router.navigate({to:"/"});
    return null;
  }

  return (
    <div className="col-span-full row-start-2 row-end-13 grid">
      <div className="user__container flex flex-col gap-3 rounded p-3 shadow-lg">
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
          <div className="user__container__form col-span-2 flex flex-col items-center justify-center bg-white shadow-md xs:col-span-3">
            <UpdateUserForm />
          </div>
          <div className="user__container__buttons flex flex-col items-center justify-center gap-3 bg-white shadow-md xs:col-span-3">
            <UpdatePasswordDialog/>
            <DeleteUserDialog/>
          </div>
        </div>
      </div>
    </div>
  );
}

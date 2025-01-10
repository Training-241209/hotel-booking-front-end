import { Button } from "@/components/ui/button";
import UpdateUserForm from "@/components/UpdateUserForm";
import { UserAvatar } from "@/components/user-avatar";
import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <div className="flex justify-center items-center h-full">
      <div className="user__container w-3/4 h-3/4 p-3 shadow-lg rounded flex flex-col gap-3">
        <div className="user__container__header h-1/4 flex items-center px-3 gap-3 shadow-md bg-white">
          <div className="user__container__header__avatar">
            {/* Change this later on */}
            <UserAvatar height={150} width={150} nav={false}/>
          </div>
          <div className="user__container__header__details flex flex-col justify-center">
            <h1>Email: {user.email}</h1>
            <h1>Full Name: {user.name}</h1>
          </div>
        </div>
        <div className="user__container__main w-full h-3/4 grid grid-cols-3 gap-3">
          <div className="user__container__form col-span-2 flex flex-col justify-center items-center shadow-md bg-white">
              <UpdateUserForm />
          </div>
          <div className="user__container__buttons flex flex-col justify-center items-center gap-3 shadow-md bg-white">
            <Button className="border w-1/2 border-black rounded-3xl bg-white hover:bg-white hover:opacity-75 text-black">
              Change Password
            </Button>
            <Button className="border w-1/2 border-red-500 rounded-3xl text-red-500 bg-white hover:bg-white hover:opacity-75">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

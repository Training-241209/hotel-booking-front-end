import { Button } from "@/components/ui/button";
import UpdateUserForm from "@/components/UpdateUserForm";
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
      <div className="user__container w-3/4 h-3/4 p-2 shadow-lg rounded">
        <div className="user__container__header h-1/4 bg-green-100 flex items-center px-3 gap-3">
          <div className="user__container__header__avatar">
            {/* Change this later on */}
            <div className="w-[150px] h-[150px] bg-blue-100 circle rounded-full"></div>
          </div>
          <div className="user__container__header__details flex flex-col justify-center">
            <h1>Email: {user.email}</h1>
            <h1>Full Name: {user.name}</h1>
          </div>
        </div>
        <div className="user__container__main w-full h-3/4 bg-blue-100 grid grid-cols-3">
          <div className="user__container__form col-span-2 flex flex-col justify-center items-center">
              <UpdateUserForm />
          </div>
          <div className="user__container__buttons flex flex-col justify-center items-center gap-3 bg-red-100">
            <Button className="border w-1/2 border-black rounded-3xl">
              Change Password
            </Button>
            <Button className="border w-1/2 border-red-500 rounded-3xl text-red-500">
              Delete Account
            </Button>
            <Button>Hello</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

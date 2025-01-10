import { userAtom } from "@/store/atoms";
import { Link, useLocation } from "@tanstack/react-router";
import { useAtom } from "jotai";

export default function Navbar() {
  console.log("in navbar");
  const [storedUser] = useAtom(userAtom);

  interface User {
    id: number;
    name: string;
    email: string;
    roleName: string;
    isAdmin: boolean;
  }

  let user: User | any = {
    id: storedUser?.userId,
    name: `${storedUser?.firstName} ${storedUser?.lastName}`,
    email: `${storedUser?.email}`,
  };
  // user = null;
  console.log(storedUser);
  console.log(user);

  // Check if the user is on the login or register page
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isAuth = isLoginPage || isRegisterPage;

  const linkTextColor = isAuth ? "text-white" : "text-[#022b60]";

  return (
    <div
      className={`flex h-24 items-center justify-between px-36 py-3 ${storedUser ? "shadow-md" : ""} ${isAuth ? "bg-transparent" : ""}`}
    >
      <div className="flex items-center justify-center">
        <Link to="/HomePage">
          <img
            src={isAuth ? "logo-white.png" : "logo-blue.png"}
            alt="Logo"
            className="h-[75px] w-[75px]"
          />
        </Link>
      </div>
      {storedUser && (
        <div className="ml-3 flex flex-1 gap-3">
          <Link to="/" className={`${linkTextColor} [&.active]:font-bold`}>
            Hotels
          </Link>
          <Link to="/" className={`${linkTextColor} [&.active]:font-bold`}>
            Reservations
          </Link>
          <Link to="/" className={`${linkTextColor} [&.active]:font-bold`}>
            Reviews
          </Link>
        </div>
      )}

      {storedUser && (
        <>
          <div className="mx-3 bg-orange-500">
            <input type="text" placeholder="Enter a location" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[50px] w-[50px] rounded-full bg-blue-300"></div>
            <span>{user?.name}</span>
          </div>
        </>
      )}
      {!storedUser && (
        <div className="flex gap-3">
          <Link
            to="/login"
            className={`${linkTextColor} text-xl [&.active]:font-bold`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`${linkTextColor} text-xl [&.active]:font-bold`}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

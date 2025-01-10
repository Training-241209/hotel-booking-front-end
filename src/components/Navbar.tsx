import { Link, useLocation } from "@tanstack/react-router";
import { UserDropdown } from "./user-dropdown";

export default function Navbar() {
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

  // user = null;

  // Check if the user is on the login or register page
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isAuth = isLoginPage || isRegisterPage;

  const linkTextColor = isAuth ? "text-white" : "text-[#022b60]";

  return (
    <div
      className={`flex items-center justify-between h-24 py-3 px-36 ${user ? "shadow-md" : ""} ${isAuth ? "bg-transparent" : ""}`}
    >
      <div className="flex items-center justify-center">
        <Link to="/HomePage">
          <img
            src={isAuth ? "logo-white.png" : "logo-blue.png"}
            alt="Logo"
            className="w-[75px] h-[75px]"
          />
        </Link>
      </div>
      {user && (
        <div className="flex gap-3 ml-3 flex-1">
          <Link to="/" className={`${linkTextColor} [&.active]:font-bold`}>
            Hotels
          </Link>
          <Link to="/" className={`${linkTextColor} [&.active]:font-bold`}>
            Reservations
          </Link>
        </div>
      )}

      {user && (
        <>
          <div className="bg-orange-500 mx-3">
            <input type="text" placeholder="Enter a location" />
          </div>
          <div className="flex items-center gap-3">
            <UserDropdown />
          </div>
        </>
      )}
      {!user && (
        <div className="flex gap-3">
          <Link
            to="/login"
            className={`${linkTextColor} [&.active]:font-bold text-xl`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`${linkTextColor} [&.active]:font-bold text-xl`}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

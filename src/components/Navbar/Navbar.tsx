import { Link, useLocation } from "@tanstack/react-router";
import { UserDropdown } from "../user-dropdown";
import { Search } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";

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

  const [show, setShow] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = (e: any) => {
    setSearchLocation(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
    // Remember to to add another function to actually handle search under this comment: handleSearch(location)
  };

  return (
    <div
      className={`flex h-24 items-center justify-between px-36 py-3 ${user ? "shadow-md" : ""} ${isAuth ? "bg-transparent" : ""}`}
    >
      <div className="flex items-center justify-center">
        <Link to="/HomePage">
          <img
            src={isAuth ? "logo-white.png" : "logo-blue.png"}
            alt="Logo"
            className="h-[60px] w-[60px]"
          />
        </Link>
      </div>
      {user && (
        <div className="ml-5 flex flex-1 gap-3 text-2xl">
          <Link
            to="/HomePage"
            className={`${linkTextColor} [&.active]:font-bold`}
          >
            Hotels
          </Link>
          <Link to="/ReservationPage" className={`${linkTextColor} [&.active]:font-bold`}>
            Reservations
          </Link>
        </div>
      )}

      {user && (
        <div className="flex items-center justify-center">
          <div className="relative mx-3 flex items-end justify-center">
            <input
              className={`search ${show ? styles.search : styles.hide}`}
              type="text"
              placeholder="Enter city, state, zipcode"
              value={searchLocation}
              onChange={handleChange}
            />
            <Search onClick={() => handleShow()} />
          </div>
          <div className="flex h-[50px] w-[50px]">
            <UserDropdown />
          </div>
        </div>
      )}
      {!user && (
        <div className="flex gap-3 text-2xl">
          <Link to="/login" className={`${linkTextColor} [&.active]:font-bold`}>
            Login
          </Link>
          <Link
            to="/register"
            className={`${linkTextColor} [&.active]:font-bold`}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

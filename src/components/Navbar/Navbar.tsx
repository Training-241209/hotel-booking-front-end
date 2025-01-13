import { Link, useLocation } from "@tanstack/react-router";
import { UserDropdown } from "../user-dropdown";
import { Search } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/store/atoms";
import { CreateHotelDialog } from "../CreateHotelDialog";

export default function Navbar() {
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
  // console.log(storedUser);
  // console.log(user);

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
      className={`col-span-12 row-span-1 grid grid-cols-12 gap-3 bg-red-100 ${storedUser ? "shadow-md" : ""} ${isAuth ? "bg-transparent" : ""}`}
    >
      <Link
        to="/HomePage"
        className={`col-start-2 flex items-center justify-center bg-contain bg-center bg-no-repeat ${
          isAuth ? "bg-[url('logo-white.png')]" : "bg-[url('logo-blue.png')]"
        }`}
      ></Link>
      <div className="col-start-3 flex items-center justify-center gap-3">
        <Link
          to="/HomePage"
          className={`${linkTextColor} text-2xl [&.active]:font-bold`}
        >
          Hotels
        </Link>
      </div>
      {storedUser && (
        <div className="col-start-4 ml-5 flex flex-1 items-center gap-3 text-2xl">
          <Link
            to="/ReservationPage"
            className={`${linkTextColor} [&.active]:font-bold`}
          >
            Reservations
          </Link>
          {/* Remove this Create Hotel button Later on */}
        </div>
      )}
      {storedUser && (
        <div className="col-start-5 flex items-center mx-auto">
          <CreateHotelDialog />
        </div>
      )}

      {storedUser && (
        <div className="col-start-11 flex items-center justify-center">
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
      {!storedUser && (
        <div className="col-start-11 col-end-12 flex items-center gap-3 text-2xl">
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

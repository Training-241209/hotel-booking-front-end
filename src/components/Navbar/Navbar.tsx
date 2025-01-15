import { Link } from "@tanstack/react-router";
import { UserDropdown } from "../user-dropdown";
import { Search } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useAtom } from "jotai";
import { blueAtom, userAtom } from "@/store/atoms";
import { CreateHotelDialog } from "../Dialogs/CreateHotelDialog";


export default function Navbar() {
  const [storedUser] = useAtom(userAtom);
  const [blue] = useAtom(blueAtom);
  const [show, setShow] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = (e: any) => {
    setSearchLocation(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
    // Remember to to add another function to actually handle search under this comment: handleSearch(location)
  };
  const [currentUser] = useAtom(userAtom);

  return (
    <div
      className={`col-span-12 row-span-1 grid grid-cols-12 gap-3 ${storedUser ? "shadow-md" : ""} sm:text-sm md:text-lg 2xl:text-2xl`}
    >
      <Link
        to="/HomePage"
        className={`col-start-2 flex items-center justify-center bg-contain bg-center bg-no-repeat xs:scale-150 ${blue ? "bg-[url(/logo-blue.png)]" : "bg-[url(/logo-white.png)]"}`}
      ></Link>
      <div
        className={`${storedUser ? "md:col-end-6 lg:col-end-5 xs:col-end-7" : "col-span-1"} col-start-3 flex items-center justify-evenly`}
      >
        {storedUser && (
          <Link
            to="/HomePage"
            className={`hidden lg:flex [&.active]:font-bold text-[#022b60]`}
          >
            Hotels
          </Link>
        )}

        {storedUser && (
          <div className="hidden items-center justify-center lg:flex text-[#022b60]">
            <Link
              to="/ReservationPage"
              className={`[&.active]:font-bold`}
            >
              Reservations
            </Link>
          </div>
        )}
      </div>

      {storedUser && (
        <div className="col-end-12 flex items-center justify-end gap-3 md:col-start-8 lg:col-start-10 2xl:col-start-11 xs:col-start-7">
          <div className="relative flex items-end justify-center">
            <input
              className={`search ${show ? styles.search : styles.hide}`}
              type="text"
              placeholder="Enter Location"
              value={searchLocation}
              onChange={handleChange}
            />
            <Search onClick={() => handleShow()} />
          </div>
          {currentUser?.isAdmin ? <CreateHotelDialog /> : null}
          <div className="flex h-[50px] w-[50px]">
            <UserDropdown />
          </div>
        </div>
      )}
      {!storedUser && (
        <div className="col-end-12 flex items-center gap-3 sm:col-start-9 md:col-start-10 2xl:col-start-11 xs:col-start-10 xxs:col-start-8">
          <Link to="/login" className={`[&.active]:font-bold ${blue ? 'text-[#022b60]' :'text-white'}`}>
            Login
          </Link>
          <Link
            to="/register"
            className={`[&.active]:font-bold ${blue ? 'text-[#022b60]' :'text-white'}`}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

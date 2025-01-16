import { Link } from "@tanstack/react-router";
import { UserDropdown } from "../user-dropdown";
import { Search } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useAtom } from "jotai";
import { filterHotelAtom, userAtom } from "@/store/atoms";
import { CreateHotelDialog } from "../Dialogs/CreateHotelDialog";

export default function Navbar() {
  const [storedUser] = useAtom(userAtom);
  const [show, setShow] = useState(false);
  const [filterHotel, setFilterHotel] = useAtom(filterHotelAtom);

  const handleChange = (e: any) => {
    setFilterHotel(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
    // Remember to to add another function to actually handle search under this comment: handleSearch(location)
  };
  const [currentUser] = useAtom(userAtom);

  return (
    <div
      className={`col-start-1 col-end-13 row-start-1 row-end-2 grid grid-cols-12 gap-3 sm:text-sm md:text-lg 2xl:text-2xl`}
    >
      <Link
        to="/HomePage"
        className={`col-start-2 flex items-center justify-center bg-[url(/logo-white.png)] bg-contain bg-center bg-no-repeat xs:scale-150`}
      ></Link>
      <div
        className={`${storedUser ? "md:col-end-6 lg:col-end-5 xs:col-end-7" : "col-span-1"} col-start-3 flex items-center justify-evenly`}
      >
        {storedUser && (
          <Link
            to="/HomePage"
            className={`hidden text-white lg:flex [&.active]:font-bold`}
          >
            Hotels
          </Link>
        )}

        {storedUser && (
          <div className="hidden items-center justify-center text-white lg:flex">
            <Link to="/ReservationPage" className={`[&.active]:font-bold`}>
              Reservations
            </Link>
          </div>
        )}
      </div>

      {storedUser && (
        <div className="col-end-12 flex items-center justify-end gap-3 md:col-start-8 lg:col-start-10 2xl:col-start-11 xs:col-start-7">
          <div className="relative flex items-center justify-center">
            <input
              className={`search ${show ? styles.search : styles.hide} rounded-md py-1 pl-3`}
              type="text"
              placeholder="Enter Location"
              value={filterHotel}
              onChange={handleChange}
            />
            <Search onClick={() => handleShow()} className="text-white" />
          </div>
          {currentUser?.isAdmin ? <CreateHotelDialog /> : null}
          <div className="flex h-[50px] w-[50px]">
            <UserDropdown />
          </div>
        </div>
      )}
      {!storedUser && (
        <div className="col-end-12 flex items-center gap-3 sm:col-start-9 md:col-start-10 2xl:col-start-11 xs:col-start-10 xxs:col-start-8">
          <Link to="/login" className={`text-white [&.active]:font-bold`}>
            Login
          </Link>
          <Link to="/register" className={`} text-white [&.active]:font-bold`}>
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

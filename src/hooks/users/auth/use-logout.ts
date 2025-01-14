import { useRouter } from "@tanstack/react-router";
import { toast } from "../../use-toast";
import { allHotelReviewsAtom, allHotelsAtom, allReserveAtom, hotelAtom, hotelIdAtom, reserveAtom, reviewAtom, userAtom } from "@/store/atoms";
import { useSetAtom } from "jotai";

export function useLogout() {
  const router = useRouter();

  const setUser = useSetAtom(userAtom);
  const setReserve = useSetAtom(reserveAtom);
  const setReview = useSetAtom(reviewAtom);
  const setHotel = useSetAtom(hotelAtom);
  const setHotelId = useSetAtom(hotelIdAtom);

  const setAllReview = useSetAtom(allHotelReviewsAtom);
  const setAllReserve = useSetAtom(allReserveAtom);
  const setAllHotel = useSetAtom(allHotelsAtom);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setReserve(null);
    setReview(null);
    setHotel(null);
    setHotelId(null);
    
    setAllReview([]);
    setAllReserve([]);
    setAllHotel([]);

    toast({
      title: "Logged out successfully",
    });
    router.navigate({ to: "/" });
  };

  return logout;
}

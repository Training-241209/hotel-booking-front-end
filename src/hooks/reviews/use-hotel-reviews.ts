import axiosInstance from "@/lib/axios-config";
import { allHotelReviewsAtom, hotelAtom } from "@/store/atoms";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

export function useHotelReviews()
{
    const [hotel] = useAtom(hotelAtom);
    const setAllHotelReviews = useSetAtom(allHotelReviewsAtom);

    return useQuery(
        {
            queryKey: ["reviews"],
            queryFn: async () =>
            {
                const res = await axiosInstance.get(`/api/reviews/hotel/${hotel?.hotelId}`);
                setAllHotelReviews(res.data);
                return res.data;
            }
        }
    )
}
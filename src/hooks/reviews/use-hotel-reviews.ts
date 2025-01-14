import axiosInstance from "@/lib/axios-config";
import { allHotelReviewsAtom, hotelAtom } from "@/store/atoms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

export function useHotelReviews()
{
    const [hotel] = useAtom(hotelAtom);
    const setAllHotelReviews = useSetAtom(allHotelReviewsAtom);
    const queryClient = useQueryClient();

    return useQuery(
        {
            queryKey: ["reviews"],
            queryFn: async () =>
            {
                const res = await axiosInstance.get(`/api/reviews/hotel/${hotel?.hotelId}`);
                setAllHotelReviews(res.data);
                queryClient.invalidateQueries({queryKey: ["reviews"]});
                // console.log(`Reviews: ${res.data}`);
                return res.data;
            }
        }
    )
}
import axiosInstance from "@/lib/axios-config";
import { allHotelReviewsAtom, hotelAtom, Review } from "@/store/atoms";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

export function useHotelReviews(id: any)
{
    const [hotel] = useAtom(hotelAtom);
    const setAllHotelReviews = useSetAtom(allHotelReviewsAtom);
    // const queryClient = useQueryClient();

    return useQuery<Review[]>(
        {
            queryKey: ["reviews"],
            queryFn: async () =>
            {
                const res = await axiosInstance.get<Review[]>(`/api/reviews/hotel/${id}`);
                setAllHotelReviews(res.data);
                // queryClient.invalidateQueries({queryKey: ["reviews"]});
                // console.log(`Reviews: ${res.data}`);
                return res.data;
            }
        }
    )
}
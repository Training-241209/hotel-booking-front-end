import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios-config";


export function useFetchReimbursementByUser(id: any) {
    return useQuery({
        queryKey: ['reviewsByHotelId', id],
        queryFn: async () => {
            if (!id) return null;
            try {
                const resp = await axiosInstance.get(`/api/reviews/hotel/${id}`);
                return resp.data;
            } catch (e) {
                console.log(e);
                return null;
            }
        },
    });

}
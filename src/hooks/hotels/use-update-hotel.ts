import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { HotelSchema } from "@/schemas/hotels/hotel-schema";
import axiosInstance from "@/lib/axios-config";
import { useAtom } from "jotai";
import { hotelAtom } from "@/store/atoms";

export function useUpdateHotel()
{
    const queryClient = useQueryClient();
    const {toast} = useToast();
    const [hotel] = useAtom(hotelAtom);

    return useMutation(
        {
            mutationFn: async (values: HotelSchema) =>
            {
                const res = await axiosInstance.patch(`/api/hotels/edit/${hotel?.hotelId}`, values);
                return res.data;
            },
            onSuccess: () =>
            {
                queryClient.invalidateQueries(
                    {
                        queryKey: ["hotels"]
                    }
                );
                toast({
                    title: "Hotel Updated"
                });
            }
        }
    )
}
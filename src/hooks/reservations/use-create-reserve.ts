import axiosInstance from "@/lib/axios-config";
import { ReserveSchema } from "@/schemas/reservations/reserve-schema";
import { hotelAtom } from "@/store/atoms";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useToast } from "../use-toast";

export function useCreateReserve()
{
    const [hotel] = useAtom(hotelAtom);
    const {toast} = useToast();

    return useMutation(
        {
            mutationFn: async (values: ReserveSchema) =>
            {
                const res = await axiosInstance.post(`/api/reservations/create/${hotel?.hotelId}`, values);
                return res.data;
            },
            onSuccess: () =>
            {
                toast(
                    {
                        title: "Reservation Created"
                    }
                );
            }
        }
    )
}
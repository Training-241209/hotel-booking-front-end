import axiosInstance from "@/lib/axios-config";
import { reserveAtom } from "@/store/atoms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "../use-toast";
<<<<<<< HEAD
// import { useRouter } from "@tanstack/react-router";
=======
>>>>>>> main

export function useDeleteReserve()
{
    const [reserve] = useAtom(reserveAtom);
    const queryClient = useQueryClient();
<<<<<<< HEAD
    // const router = useRouter();
=======
>>>>>>> main

    return useMutation(
        {
            mutationFn: async () =>
            {
                const res = await axiosInstance.delete(`/api/reservations/del/${reserve?.reservationId}`);
                return res.data;
            },
            onSuccess: () =>
            {
                toast(
                    {
                        title: "Reservation Deleted"
                    }
                );
                queryClient.invalidateQueries({queryKey: ["reservations"]});
            },
            onError: () =>
            {
                toast(
                    {
                        title: "Error Deleting Reservation"
                    }
                );
            }
        }
    )
}
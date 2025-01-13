import axiosInstance from "@/lib/axios-config";
import { allHotelsAtom, allReserveAtom, Reservation,  } from "@/store/atoms";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export function useAllReserves()
{
    const setAllReserve = useSetAtom(allReserveAtom);

    return useQuery<Reservation[]>(
        {
            queryKey: ["hotels"],
            queryFn: async () =>
            {
                const res = await axiosInstance.get<Reservation[]>("/api/reservations/user");
                console.log(res.data);
                setAllReserve(res.data);
                return res.data;
            },
        }
    )
}
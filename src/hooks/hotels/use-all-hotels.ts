import axiosInstance from "@/lib/axios-config";
import { allHotelsAtom, Hotel } from "@/store/atoms";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export function useAllHotels()
{
    const setAllHotels = useSetAtom(allHotelsAtom);

    return useQuery<Hotel[]>(
        {
            queryKey: ["hotels"],
            queryFn: async () =>
            {
                const res = await axiosInstance.get<Hotel[]>("/api/hotels/");
                console.log(res.data);
                setAllHotels(res.data);
                return res.data;
            },
        }
    )
}
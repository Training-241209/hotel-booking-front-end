import axiosInstance from "@/lib/axios-config";
import { ReviewSchema } from "@/schemas/reviews/reviews-schema";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";

export function useCreateReview()
{
    const {toast} = useToast();
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: ReviewSchema) =>
            {
                const res = await axiosInstance.post("/api/reviews/create", values);
                return res.data;
            },
            onSuccess: () =>
            {
                toast({title: "Review Added"});
                queryClient.invalidateQueries({queryKey: ["reviews"]});
            }
        }
    )
}
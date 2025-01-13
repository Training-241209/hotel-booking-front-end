import axiosInstance from "@/lib/axios-config";
import { UpdateUserSchema } from "@/schemas/updateUser-schema";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { useAtom, useSetAtom } from "jotai";
import { userAtom } from "@/store/atoms";

export function useUpdUser()
{
    const {toast} = useToast();
    const setUser = useSetAtom(userAtom);
    // const [user, setUser] = useAtom(userAtom);

    return useMutation(
        {
            mutationFn: async (values: UpdateUserSchema) =>
            {
                const res = await axiosInstance.patch(`/api/users/edit`, values);
                console.log(res.data);
                return res.data;
            },
            onSuccess: () =>
            {
                // console.log(updateUser);
                // console.log(user);

                toast(
                    {
                        title: "User Updated"
                    }
                )
            }
        }
    )
}
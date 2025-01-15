import axiosInstance from "@/lib/axios-config";
import { UpdateUserSchema } from "@/schemas/updateUser-schema";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";
<<<<<<< HEAD
// import { useSetAtom } from "jotai";
// import { userAtom } from "@/store/atoms";
=======
>>>>>>> main

export function useUpdUser()
{
    const {toast} = useToast();
<<<<<<< HEAD
    // const setUser = useSetAtom(userAtom);
=======
>>>>>>> main
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
            },
            onError: () =>
            {
                toast({title: "Error User Could Not Be Updated"});
            }
        }
    )
}
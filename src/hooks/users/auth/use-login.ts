import { useMutation} from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import axiosInstance from "@/lib/axios-config";
import { useToast } from "../../use-toast";
import { LoginSchema } from "@/schemas/auth/login-schema";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/atoms";
import { jwtDecode } from "jwt-decode";


export function useLogin() {
    const router = useRouter();
    const { toast } = useToast()
    const setUser = useSetAtom(userAtom);

    return useMutation({
        
        mutationFn: async (values: LoginSchema) => {
            const resp = await axiosInstance.post("/api/auth/login", values);
            // console.log(`body: ${resp.data}`);
            // console.log(`headers: ${resp.headers[`authorization`]}`);
            // console.log(`returned: ${resp.data.token}`);
            return resp.headers[`authorization`];
        },
        onSuccess: (token) => {
            localStorage.setItem('token', token);
            // console.log(`token: ${token}`);

            const decoded = jwtDecode(token) as 
            {
                userId: number;
                firstName: string;
                lastName: string;
                email: string;
                roleName: string;
                isAdmin: boolean;
            };
            // console.log(`decoded token: ${JSON.stringify(decoded)}`);

            // console.log(`id claims: ${decoded.userId}`);
            // console.log(`fn claims: ${decoded.firstName}`);
            // console.log(`ln claims: ${decoded.lastName}`);
            // console.log(`email claims: ${decoded.email}`);

            setUser(
                {
                    userId: decoded.userId,
                    firstName: decoded.firstName,
                    lastName: decoded.lastName,
                    email: decoded.email,
                    roleName: decoded.roleName,
                    isAdmin: decoded.isAdmin,
                }
            )

            toast({
                title: "Login Successfully",
            })
            router.navigate({ to: "/HomePage" });

        },
        onError: () => {
            toast({
                title: "Login Failed",
            })
        },
    });
}
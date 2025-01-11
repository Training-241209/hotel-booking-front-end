import { useRouter } from "@tanstack/react-router";
import { toast } from "../../use-toast";
import { userAtom } from "@/store/atoms";
import { useSetAtom } from "jotai";

export function useLogout() {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast({
      title: "Logged out successfully",
    });
    router.navigate({ to: "/" });
  };

  return logout;
}

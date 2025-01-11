import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { userAtom } from "@/store/atoms";
import { useAtom } from "jotai";

interface UserAvatarProps {
  height: number;
  width: number;
  nav: boolean;
}

export function UserAvatar({ height, width, nav }: UserAvatarProps) {
  const [storedUser] = useAtom(userAtom);
  
  if (!storedUser){
    return null;
  }
  
  let fontSize = nav ? "text-sm" : "text-5xl";

  return (
    <Avatar className={`h-[${height}px] w-[${width}px] ${fontSize}`}>
      <AvatarFallback>
        {storedUser.firstName.charAt(0).toUpperCase() +
          storedUser.lastName.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

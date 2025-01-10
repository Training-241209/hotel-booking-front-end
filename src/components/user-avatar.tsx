import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// reference my previous project for authUtils
// import { getUser, User } from "@/lib/authUtils";
// import { useEffect, useState } from "react";

interface UserAvatarProps {
  height: number;
  width: number;
  nav: boolean
}

export function UserAvatar({ height, width, nav }: UserAvatarProps) {
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //     setUser(getUser());
  // }, []);

  // if (!user) return null;
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }

  let user: User | any = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  };

  let fontSize = nav ? 'text-sm': 'text-5xl';

  return (
    <Avatar className={`h-[${height}px] w-[${width}px] ${fontSize}`}>
      <AvatarFallback>
        {user.firstName.charAt(0).toUpperCase() +
          user.lastName.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

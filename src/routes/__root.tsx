import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  ),
});

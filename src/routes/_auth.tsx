import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="mx-auto flex h-[80vh] items-center justify-center px-4" // changed h-[calc(100vh-5rem)]
    >
      <div className="absolute top-0 -z-10 h-full w-full bg-[url('landing-bg.jpg')] bg-cover bg-center"></div>
      <Outlet />
    </div>
  );
}

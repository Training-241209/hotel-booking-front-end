import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="col-span-full row-span-full grid grid-cols-12 grid-rows-12"
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[url('landing-bg.jpg')] bg-cover bg-center"></div>
      <Outlet />
    </div>
  );
}

import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="mx-auto px-4 flex justify-center items-center h-[80vh]" // changed h-[calc(100vh-5rem)]
    >
      <div className="bg-[url('landing-bg.jpg')] bg-cover bg-center w-full h-full absolute top-0 -z-10"></div>
      <Outlet />
    </div>
  );
}

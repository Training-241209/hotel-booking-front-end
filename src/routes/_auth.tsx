import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="mx-auto px-4 flex justify-center items-center h-[calc(100vh-5rem)] bg-[url('https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?cs=srgb&dl=pexels-esan-2085998.jpg&fm=jpg')] bg-cover bg-center"
    >
      <Outlet />
    </div>
  );
}

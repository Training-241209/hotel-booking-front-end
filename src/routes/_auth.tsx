import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mx-auto px-4 flex justify-center items-center h-[calc(100vh-99px)]'>
      <Outlet />
    </div>
  )
}

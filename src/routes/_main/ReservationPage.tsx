import ReservationItem from '@/components/ReservationItem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/ReservationPage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex h-[calc(100vh-5rem)] w-full flex-col items-center px-36 py-10'>
    <h1 className='text-3xl font-bold underline mb-3 text-[#022b60]'>My Reservations</h1>
    <ReservationItem/>
  </div>
}

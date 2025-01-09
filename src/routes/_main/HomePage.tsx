import HotelSlider from '@/components/HotelSlider'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return( 
  <div className='bg-red-50 w-full h-[calc(100vh-6.5rem)] px-36 py-10 flex items-center flex-col'>
    <div className="bg-blue-50 grid w-3/4 h-full grid-cols-5 grid-rows-1">
    <div className="col-span-2 flex justify-center p-3">
      <HotelSlider />
    </div>
    <div className="col-span-3">
      Hotel Details
    </div>

    </div>
  </div>
  )
}

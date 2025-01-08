import HotelCarousel from '@/components/HotelCarousel'
import { Input } from '@/components/ui/input'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

  // Notes: px-36 on all pages
  // Current height of navbar = 99px
  // primary-color: #022b60

function Index() {
  return (
    <div className="flex flex-col items-center justify-start h-[calc(100vh-99px)] ">
      <div className="logo mt-48">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="search_bar mt-8 w-1/2">
        <Input type="text" placeholder="Location Search" className='shadow-sm rounded-lg' />
      </div>
      <h1 className='mt-24 text-[#022b60] mb-2 font-bold'>Check out some of our hotels</h1>
      <div className="hotel_carousel flex flex-col justify-center w-screen">
        <HotelCarousel />
      </div>
    </div>
  )
}
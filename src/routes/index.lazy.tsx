import HotelCarousel from '@/components/HotelCarousel'
import { Input } from '@/components/ui/input'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    // Notes: px-36 on all pages
    // Current height of navbar = 99px
    <div className="flex flex-col items-center justify-start h-[calc(100vh-99px)] ">
      <div className="logo mt-48">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="search_bar mt-8 w-1/2">
        <Input type="text" placeholder="Location Search" className='shadow-sm rounded-lg' />
      </div>
      <div className="hotel_carousel mt-24 flex justify-center w-screen">
        <HotelCarousel />
      </div>
    </div>
  )
}
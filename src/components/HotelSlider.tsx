import hotels from '../../hoteldata.json'
import HotelSliderItem from './HotelSliderItem';


console.log(hotels[0]);

export default function HotelSlider() {
  return (
    <div className='flex flex-col overflow-y-auto gap-2 scrollbar-hidden'>
        {hotels.map((hotel)=>(
            <HotelSliderItem key={hotel.hotel_id} {...hotel} />
        ))}
    </div>
  )
}

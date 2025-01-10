import React from 'react'

export default function ReservationItem() {
  return (
    <div className="reservation grid grid-cols-5 w-3/4 h-1/6 bg-red-200">
        <div className="reservation__image col-span-2 bg-blue-50 h-full"></div>
        <div className="reservation__details col-span-3 bg-orange-600 h-full"></div>
    </div>
  )
}

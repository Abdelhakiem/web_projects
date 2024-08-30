import React from 'react'
import { assets } from '../assets/frontend_assets/assets';

export default function Hero() {
  return (
    <div className="flex items-center justify-between h-screen border  bg-white">
        <div className="w-1/2 flex flex-col justify-center   pl-20">
            <div className="text-xs font-light text-gray-500 tracking-wide mb-2">
            OUR BESTSELLERS
            </div>
            <h1 className="text-5xl font-semibold text-gray-800 mb-4">
            Latest Arrivals
            </h1>
            <div className="flex items-center text-sm font-medium text-gray-800 cursor-pointer">
            <span>SHOP NOW</span>
            <div className="ml-4 w-8 border-t border-gray-800"></div>
            </div>
        </div>

        <div className="w-1/2 h-full">
            <img src={assets.hero_img} alt="Latest Arrivals" className="w-full h-full object-cover"/>
        </div>
    </div>

  )
}

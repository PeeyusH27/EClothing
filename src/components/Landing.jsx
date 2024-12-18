import React from 'react'
import { assets } from '../assets/assets'

const Landing = () => {
  return (
    <div className='flex w-full flex-col sm:flex-row border border-gray-400 rounded-lg'>
        {/*Landing Page Left*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-lg'>Best Sellers</p>
                </div>
                <h1 className='text-3xl prata-regular sm:py-3 lg:text-6xl leading-relaxed'>Latest Arrivals</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-lg">Shop Now</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                </div>
            </div>
        </div>

        {/*Landing Right Side*/}
        <img className='w-full sm:w-1/2 rounded-r-lg' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Landing
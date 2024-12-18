import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=''>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ipsum exercitationem iste, ea facilis.
                    </p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>


                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+12-345-678-90</li>
                        <li>peeyushdas@gmail.com</li>
                    </ul>
                </div>


            </div>

            <div>
                <hr />
                <div className='flex-col items-center justify-center gap-2'>
                    <p className='pt-5 text-2xl font-bold text-center '>Peeyush Chandra Das</p>
                    <div className='p-2'>
                        <ul className='flex justify-center gap-4 bg-white'>
                            <li><a href="#">Portolio</a></li>
                            <li><a href="https://github.com/PeeyusH27" target='_blank'>Github</a></li>
                            <li><a href="https://linkedin.com/in/peeyush-chandra-das" target='_blank'>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
import React from 'react'
import Image from "next/image"

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#7b2424]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className="py-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ipsum perspiciatis deleniti eligendi eius cumque veniam consectetur dolore, repudiandae dicta natus voluptas cum unde facilis vero laboriosam, minus fugit sit.</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis architecto debitis praesentium dicta, atque quas dolore reiciendis repudiandae placeat dolor recusandae adipisci consectetur quod harum quia eligendi ipsam ad!</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis architecto debitis praesentium dicta, atque quas dolore reiciendis repudiandae placeat dolor recusandae adipisci consectetur quod harum quia eligendi ipsam ad!</p>
            </div>
            <div className='w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 p-4'>
            <Image className='rounded-xl' src="/../public/assets/ishaq.jpg" alt="/" width="300" height="150"/>             
            </div>
        </div>
    </div>
  )
}

export default About
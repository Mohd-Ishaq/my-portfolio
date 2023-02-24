import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import simpleApi from "../public/projects/simple1.png"
import jobApi  from "../public/projects/job1.png"
import {RiRadioButtonFill} from "react-icons/ri"

const project = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image className='absolute z-1' fill object-fit="cover" src={simpleApi} alt="/" />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 font-mono'>
            <h2 className='py-2'>SIMPLE SOCIAL API</h2>
            <h3>A REST API</h3>
          </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='py-2'>Overview</h2>
          <p className='py-2'>Created REST API's using FASTAPI framework.it has the functionality of simple social media app where user can sign up or login and post images.Used FAST API to which is asyncronous framework of python.</p>
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>Demo</button>
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>Code</button>
          {/* <button className='px-8 py-2 mt-4 mr-8'>class</button> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl pt-8'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
            {/* <button className='px-8 py-2 mt-1 mr-2 hover:scale-105 ease-in duration-300'>Code</button> */}
            <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 gap-2' />python
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 gap-2' />FAST API
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 gap-2' />SqlAlchemy
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 gap-2' />Postgresql
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 gap-2' />Alembic
              </p>
              {/* <p className='text-gray-600 py-2 flex items-center font-bold'>
                <RiRadioButtonFill className='pr-1 gap-2' />FAST API
              </p> */}
            </div>

          </div>
        </div>
      </div>
        {/* <Link href="/#">back</Link> */}
    </div>
  )
}

export default project
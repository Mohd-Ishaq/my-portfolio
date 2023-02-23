import React from 'react'
import Image from "next/image"
import skills from "../data/skills.json"

const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-[#7b2424]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              {/* <h3 className='text-black font-medium'>Languages</h3> */}
              {/* <div className='flex items-center space-x-4 py-4'>
              <Image src="/../public/skills/python.png" alt='/' width="20" height="20" />
              <p>python</p>
              <div className='bg-gray-200 h-2 w-[50%] rounded-full'>
                  <div className='bg-gray-500 h-2 rounded-full' style={{width: `50%`}}>
                  </div>
              </div>
              <p>{"50%"}</p>
              </div>
              <div className='flex items-center space-x-4 py-4'>
              <Image src="/../public/skills/javascript.png" alt='/' width="20" height="20" />
              <p>javascript</p>
              </div> */}
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/python.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>PYTHON</h3>
                  </div>
                </div>
              </div>
              

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/django.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>DJANGO</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/fastapi.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>FASTAPI</h3>
                  </div>
                </div>
              </div>
              

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/javascript.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>JAVASCRIPT</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/nodejs.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>NODEJS</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/exp.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>ExpressJs</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/postgres.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>POSTGRESQL</h3>
                  </div>
                </div>
              </div>


              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/mysql.png" alt='/' width="90" height="90" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>MYSQL</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/sequelize.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>SEQUELIZE</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/aws.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>AWS</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/html.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>


              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div>
                    <Image src="/skills/css.png" alt='/' width="64" height="64" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              
              
            </div>
        </div>
    </div>
  )
}

export default Skills
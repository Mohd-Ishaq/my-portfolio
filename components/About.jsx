import React from 'react'
import Image from "next/image"

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#0080ff]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className="py-2 text-gray-600">Hello, my name is Mohd Ishaq. I have a Bachelor's degree in Computer Science, but I have to admit that I didn't learn much about programming during my college years. However, I am a self-taught backend developer based in Hyderabad, India.</p>
                <p className='py-2 text-gray-600'>I have experience working with Python, Javascript and relational databases, and my focus is on developing efficient and scalable applications that meet the needs of my clients and end-users. I take great pride in my ability to quickly learn new technologies and adapt to changing circumstances.</p>
                <p className='py-2 text-gray-600'>In my work as a backend developer, my goal is to create reliable and high-quality applications that meet the needs of my clients and provide a great user experience. I am dedicated to ensuring that my code is clean, efficient, and well-documented to make it easy for others to maintain and build upon.</p>
                <p className='py-2 text-gray-600'>Despite not having much formal training in computer science, I am confident in my abilities as a self-taught developer and am excited to continue developing my skills and taking on new challenges in the tech industry. My interests lie in exploring new technologies that can help me build better and smarter applications, and I am always eager to learn and expand my skillset.</p>
            </div>
            <div className='w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 p-4'>
            <Image className='rounded-xl' src="/assets/ishaq.jpg" alt="/" width="300" height="150"/>             
            </div>
        </div>
    </div>
  )
}

export default About
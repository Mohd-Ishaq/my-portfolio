import React,{useState,useEffect}from "react";
import Image from "next/image"
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import {FaGithub, FaLinkedinIn,FaTwitter} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Navbar=()=>{
    const [nav,setNav]=useState(false);
    const [shadow,setShadow]=useState(false)
    const handleNav=()=>{
        setNav(!nav);
    };
    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true)
            }else{
                setShadow(false)
            }

        }
        window.addEventListener("scroll",handleShadow)
    },[])

    return(
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px16'>
                <Image src="/assets/logo-removebg-preview.png" alt="/" width="125" height="50"/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/#home" scroll={false}>
                            <li className="m-10 text-sm uppercase hover:underline">Home</li>
                        </Link>
                        <Link href="/#about" scroll={false}>
                            <li className="m-10 text-sm uppercase hover:underline">About</li>
                        </Link>
                        <Link href="/#skills" scroll={false}>
                            <li className="m-10 text-sm uppercase hover:underline">Skills</li>
                        </Link>
                        <Link href="/#projects" scroll={false}>
                            <li className="m-10 text-sm uppercase hover:underline">Projects</li>
                        </Link>
                        {/* <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:underline">Contact</li>
                        </Link> */}

                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={
                    nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="/assets/logo-removebg-preview.png" alt="/" width="80"height="40" />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        {/* <div className="border-b border-gray-300 my-4">
                            <p className="w=[85%] md:w-[90%] py-4">Let's build something great together.</p>
                        </div> */}
                    </div>
                    <div className="py-4 flex-col">
                        <ul className="uppercase">
                            <Link href="/#home" scroll={false}>
                                <li className="py-4 text-sm" onClick={handleNav}>Home</li>
                            </Link>
                            <Link href="/#about" scroll={false}>
                                <li className="py-4 text-sm" onClick={handleNav}>About</li>
                            </Link>
                            <Link href="/#skills" scroll={false}>
                                <li className="py-4 text-sm" onClick={handleNav}>Skills</li>
                            </Link>
                            <Link href="/#projects" scroll={false}>
                                <li className="py-4 text-sm" onClick={handleNav}>Projects</li>
                            </Link>
                            {/* <Link href="/">
                                <li className="py-4 text-sm">Contact</li>
                            </Link> */}
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#7b2424]">Let's Connect</p>
                        </div>
                        <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href="https://www.linkedin.com/in/mohammed-ishaq-/" target="_blank">
                                    <FaLinkedinIn />
                                </Link>    
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href="https://github.com/Mohd-Ishaq" target="_blank">
                                    <FaGithub />
                                </Link>    
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href="https://twitter.com/ishaqmohd116" target="_blank">
                                    <FaTwitter />
                                </Link>    
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href="mailto:ishaqmohd116@gmail.com" target="_blank">
                                    <AiOutlineMail />
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Navbar
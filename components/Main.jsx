import React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaTwitter} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai";

const Main=()=>{
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    {/* <p className="uppercase text-sm tracking-widest text-gray-600">Let's build something together</p> */}
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#0080ff]">Mohammed Ishaq</span></h1>
                    <h4 className=" text-gray-700">A Back-end Developer</h4>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">I'm a back-end developer specializing in builing REST Api's Using Python and Javascript with ORM.Currently working as a junior software developer,focusing on learning new back-end frameworks and building real time projects to improve my skills.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                            <Link href="https://www.linkedin.com/in/mohammed-ishaq-/" target="_blank">
                                    <FaLinkedinIn />  
                            </Link>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                            <Link href="https://github.com/Mohd-Ishaq" target="_blank">
                                    <FaGithub />  
                            </Link>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                            <Link href="https://twitter.com/ishaqmohd116" target="_blank">
                                    <FaTwitter />  
                            </Link>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                            <Link href="mailto:ishaqmohd116@gmail.com" target="_blank">
                                    <AiOutlineMail />  
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Main;
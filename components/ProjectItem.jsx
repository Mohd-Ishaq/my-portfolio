import React from "react";
import {
  FaGithub,
  FaGlobe,
  FaInfo,
  FaInfoCircle,
  FaInternetExplorer,
} from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({
  projectImg,
  title,
  description,
  gitHubLink,
  liveLink,
  moreInfo,
}) => {
  return (
    <div className="group">
      <div className="flex relative items-center justify-center rounded-xl pt-2 shadow-xl w-full h-auto overflow-hidden">
      <div className="relative"> 
      <Image
        className="rounded-xl"
        src={projectImg}
        alt="/"
      />
      <div className="hidden group-hover:block z-10">
      <div className="bg-black absolute opacity-50 h-full w-full top-0 left-0 rounded-xl" />
      <div className='absolute left-5 bottom-5 text-white'>
                    <p className='text-l font-semibold tracking-wider'>{title}</p>
                    <p className='text-sm mt-2 max-h-[60%] overflow-hidden'>{description}</p>
                </div>
        
        <div className="absolute top-[2%] right-0 flex items-center justify-end p-2">
            <Link  data-te-toggle="tooltip-default" data-te-placement="bottom" title="git" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-black"  href={gitHubLink}>
                <FaGithub />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-black" href={liveLink}>
                <ImEarth />
            </Link>
            <Link className="text-white mx-2 hover:text-black"  href={moreInfo}>
                <AiOutlineInfoCircle />
            </Link>
        </div>
        
        
      </div>
    </div>

      </div>

    </div>
  );
};

export default ProjectItem;
 import React from 'react'
 import Image from 'next/image'
 import simple1 from "../public/projects/simple1.png"
 import job1  from "../public/projects/job1.png"
 import ProjectItem from './ProjectItem'

 const Projects = () => {
   return (
     <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='uppercase text-xl tracking-widest text-[#7b2424]'>
            Projects
          </p>
          <h2 className='py-4'>What I've Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
            projectImg={simple1}
            title="Simple Socail API"
            description="A Rest API"
            // description="Created REST API's using FASTAPI framework.it has the functionality of simple social media app where user can sign up or login and post images."
            gitHubLink="https://github.com/Mohd-Ishaq/FastApi"
            liveLink="https://social-media-app-zwdw.onrender.com/docs"
            moreInfo="/"
            />

            <ProjectItem 
            projectImg={job1}
            title="Job Engine API"
            description="A Rest API"
            // description="An API for a job engine APP. Has a slightly more funcionality with multi role authentication. Recruiters can Post, Delete Jobs. Seekers can view and apply jobs. recruiters can then select their desired candidate."
            gitHubLink="https://github.com/Mohd-Ishaq/DREAM_JOBLIST"
            liveLink="https://dream-joblist.onrender.com/docs"
            moreInfo="/"
            />
          </div>
        </div>
     </div>
   )
 }
 
 export default Projects
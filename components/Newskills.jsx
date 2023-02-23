import React from "react";
import SkillCategory from "./SkillCategory";
import { ImStack } from "react-icons/im";

// import SkillCategory from "./SkillCategory";

// const frontendSkills = [
//   { name: 'Tailwind', level: 40, icon: "/skills/" },
//   { name: 'Next.JS', level: 50, icon: SiNextdotjs },
//   // ...
// ]
const languages=[
  {name:'Python',level:70,icon:"/skills/python.png"},
  { name: 'JavaScript', level: 50, icon:"/skills/javascript.png" },

]

const backendSkills = [
  { name: 'Django', level: 70, icon: "/skills/django.png" },
  { name: 'FastAPI', level: 70, icon: "/skills/fastapi.png" },
  { name: 'Node.js', level: 60, icon: "/skills/nodejs.png" },
  // ...
]


const databaseSkills = [
  { name: 'MySQL', level: 70, icon: "/skills/mysql.png" },
  { name: 'PostgreSQL', level: 80, icon: "/skills/postgres.png" },
  { name: 'MongoDB', level: 50, icon: "/skills/mongodb.png" },
  // ...
]

const ITConstructs = [
  { name: 'Git', level: 70, icon: "/skills/github1.png" },
  { name: 'DataStructure', level: 50, icon: "/skills/datastructure.png" },
  // ...
]
// const DataVisualization = [
//   { name: 'Pandas', level: 30, icon: SiPandas },
//   { name: 'NumPY', level: 30, icon: SiNumpy },
//   { name: 'Matplotlib', level: 30, icon: AiOutlineBoxPlot },
//   // ...
// ]
const Tools = [
  { name: 'AWS', level: 60, icon: "/skills/aws.png" },
  // { name: 'Docker', level: 60, icon: SiDocker },
  // ...
]




const Skills = () => {
  return (
    <div id="Skills" className="w-full lg:h-screen py-16 px-4">
      <div className="max-w-[1240px] mx-auto h-full justify-center">
        <p className="text-xl tracking-widest uppercase p-2 text-gray-500">
          Skills
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto py-8 gap-6">
        <SkillCategory skills={languages} category="Languages" />
        <SkillCategory skills={backendSkills} category="Backend Frameworks" />
        <SkillCategory skills={databaseSkills} category="Databases" />
        {/* <SkillCategory skills={frontendSkills} category="Web Frontend" /> */}
        <SkillCategory skills={ITConstructs} category="IT Constructs" />
        {/* <SkillCategory skills={DataVisualization} category="Data Visalization" /> */}
        <SkillCategory skills={Tools} category="Tools Used" />
      </div>
      </div>
    </div>
  );
};

export default Skills
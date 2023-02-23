import Image from "next/image"

const SkillCategory = ({skills,category}) => {
    // console.log(items)
    return (
        <div className="p-4 border border-gray-300 rounded-md mb-4 shadow-lg hover:scale-105 ease-in duration-300">
            <p className="text-md uppercase font-semibold tracking-wider mb-5">{category}</p>
            {skills.map(skill => {
              return (
                <div key={skill.name} className="flex gap-1 align-middle items-center mb-2">
                  <div className="w-6 h-6 mr-2">
                    <Image src={skill.icon} alt="/" height="30" width="30"/>
                  </div>
                  <div className="flex-1 mr-4">{skill.name}</div>
                  <div className='bg-gray-200 h-2 w-[50%] rounded-full'>
                    <div className='bg-gray-500 h-2 rounded-full' style={{width: `50%`}}>
                    </div>
                    </div>
                  <div className="ml-4">{skill.level}%</div>
                </div>
              )
            })}
          </div>
      )
    }
  
  export default SkillCategory;
  
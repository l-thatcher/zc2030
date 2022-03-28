import AdminCard from "./AdminCard";
import React from "react";
import BlankCard from "./BlankCard";


const CurrentProject = (props) => {

    const allProjects = props.projects


     return   (
            <div>
                <div>
                    <h4 className='font-semibold text-xl py-6 capitalize font-serif text-gray-700 text-2xl px-10 '>
                        Current Projects
                    </h4>
                </div>


                <div className="flex overflow-x-scroll pb-10 scrollbar-hide ">

                    <BlankCard/>

                    <div className="flex flex-nowrap lg:ml-5 md:ml-5 ml-5 ">
                        {allProjects.map((project) => (
                            // <ProjectCard project={project} key={project.name} />
                            <AdminCard project={project} viewtype={'admin'} />

                        ))}
                    </div>
                </div>
            </div>)

}

export default CurrentProject;

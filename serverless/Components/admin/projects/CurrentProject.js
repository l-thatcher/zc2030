import Card from "./Card";
import React from "react";


const CurrentProject = (props) => {

    const allProjects = props.projects


     return   (
            <div>
                <div>
                    <h4 className='font-semibold text-xs py-6 capitalize font-serif text-gray-700 text-2xl px-10 '>
                        Current Projects
                    </h4>
                </div>


                <div className="flex overflow-x-scroll pb-10 scrollbar-hide">

                    <div className="flex flex-nowrap lg:ml-5 md:ml-5 ml-5 ">
                        {allProjects.map((project) => (
                            // <ProjectCard project={project} key={project.name} />
                            <Card projects={project} />

                        ))}
                    </div>
                </div>
            </div>)

}

export default CurrentProject;

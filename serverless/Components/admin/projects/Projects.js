import {React,useState} from "react";
import Card from './Card';
import CreateProject from "./CreateProject";
import Link from "next/link";


const Projects= (props) => {


    const allProjects= props.projects

    const [view, setView] = useState('current projects');


    const setToCreate = () => {
        setView('create project')

    }

    const setToCurrent = () => {
        setView('current projects')

    }

    const setToEdit = () => {
        setView('edit')

    }


    return(

        <>
            <div className="bg-white m-4 rounded-lg ">

                <div className="flex justify-between mb-5" >
                    <h3 className='font-bold py-6 capitalize font-serif text-gray-700 text-2xl px-10 '>
                        Admin project Dashboard
                    </h3>

                    <div>
                        <button onClick={() => setToCurrent()} className='mt-6 p-4 mr-10 bg-[#F8818C] active:bg-blue-600 text-white font-bold capitalize text-xs px-4 p-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>
                            Current projects</button>

                        <button onClick={() => setToCreate()} className='mt-6 p-4 mr-5 bg-indigo-400 active:bg-blue-600 text-white font-bold capitalize text-xs px-4 p-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>
                            Create Project</button>

                    </div>


                </div>


                {view === 'current projects' && (
                    <div>
                <div>
                    <h4 className='font-semibold text-xs py-6 capitalize font-serif text-gray-700 text-2xl px-10 '>
                        {view}
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

                    </div>
                )}

                {view === 'create project' && (

                    <CreateProject/>

                )}

                {view === 'edit' && (

                    <EditProject/>

                )}

            </div>

        </>

    )

}


export default Projects;
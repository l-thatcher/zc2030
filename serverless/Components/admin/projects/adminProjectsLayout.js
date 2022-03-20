
import Projects from './Projects'
import CreateProject from "./CreateProject";
import ProjectCard from "../../ProjectCard";

const AdminProjectsLayout = (props) => {

    const allProjects = props.projects


    return(

        <div className="h-screen bg-gray-100"  style={{width:"100%"}}>
            <h1 className='font-bold text-3xl px-10 mt-10'>

            </h1>

           <Projects projects={allProjects}/>


        </div>
    )

}



export default AdminProjectsLayout;
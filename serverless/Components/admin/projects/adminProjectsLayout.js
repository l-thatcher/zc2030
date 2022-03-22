
import Projects from './Projects'
import CreateProject from "./CreateProject";
import ProjectCard from "../../ProjectCard";
import {ViewContext} from "../../../Contexts/ViewContext";
import {useState} from "react";

const AdminProjectsLayout = (props) => {

    const allProjects = props.projects

    const [view, setView] = useState('current projects');
    //project to edit
    const [editPrj, setEditPrj] = useState('current projects');

    return(

        <div className="h-screen bg-gray-100"  style={{width:"100%"}}>
            <h1 className='font-bold text-3xl px-10 mt-10'>

            </h1>
            <ViewContext.Provider value={{view,setView,editPrj,setEditPrj}}>
                <Projects projects={allProjects}/>
            </ViewContext.Provider>
        </div>
    )

}



export default AdminProjectsLayout;

import Projects from './Projects'
import CreateProject from "./CreateProject";
import ProjectCard from "../../ProjectCard";
import {ViewContext} from "../../../Contexts/ViewContext";
import {useState} from "react";
import ProfileHeader from "./ProfileHeader";

const AdminProjectsLayout = (props) => {

    const allProjects = props.projects

    const [view, setView] = useState('current projects');
    //project to edit
    const [editPrj, setEditPrj] = useState('current projects');

    return(
            <ViewContext.Provider value={{view,setView,editPrj,setEditPrj}} >
                <div className='w-full '>
                    <div className=''>
                        {/*<ProfileHeader/>*/}
                    </div>
                    <div className=' '>
                        <Projects projects={allProjects} />
                    </div>
                </div>
            </ViewContext.Provider>

    )

}



export default AdminProjectsLayout;
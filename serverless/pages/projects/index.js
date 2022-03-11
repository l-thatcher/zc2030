import ProjectCard from "../../Components/ProjectCard";
import {getProjectsList} from "../../services/ProjectService";



export default function Projects(props) {
    const allProjects = props.allProjects;
    console.log(allProjects)
    return (
        <div className="content-center">
            <div className=" items-center justify-items-center justify-center flex px-50 grid grid-rows-2 grid-flow-col gap-4 justify-content-center">

                <div className="overflow-y-scroll flex w-5/7 bg-zc30-green items-center justify-center flex px-10 grid grid-cols-3 grid-flow-row gap-4 border-5 border-zc30-light-green">
        {allProjects.map((project) => (
            // <ProjectCard project={project} key={project.name} />
            <ProjectCard project = {project}/>
            ))}

        </div>
            </div>
        </div>

    )
};



export async function getServerSideProps() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json();


    // const res = await getListofProjects();
    // console.log(res)
    // const allProjects = JSON.stringify(res);
    // console.log("here");
    // console.log(allProjects);

    const projectsRes = await getProjectsList();
    const allProjects = projectsRes.data;


    return {
        props: {allProjects}
    };
}

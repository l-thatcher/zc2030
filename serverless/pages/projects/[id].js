// import ProjectDetails from "../../Components/projectDetails/ProjectDetails";
// import { getProjectsList } from "../../services/ProjectService";
// import { getProjectById } from "../../services/ProjectService";
//
import ProjectDetails from "../../Components/projectDetails/ProjectDetails";
import {getProjectById} from "../../services/ProjectService";

export async function getServerSideProps(context) {
  const id = context.params.id;
  console.log("id: " + id);
  const projectRes = await getProjectById(id);
  const project = projectRes.data;
    console.log(project)

  return {
    props: { project },
  };
}

export default function Details(props) {
    const project = props.project;
  // console.log("here:" + project);
  return (
      <div className="bg-gray-10">
        <ProjectDetails detailsProps={project} />
      </div>
  );
}


import ProjectDetails from "../../Components/projectDetails/ProjectDetails";
import { getProjectsList } from "../../services/ProjectService";
import { getProjectById } from "../../services/ProjectService";

export async function getServerSideProps(context) {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();
  const id = context.params.id;
  console.log("id: " + id);
  const projectRes = await getProjectById(id);
  const project = projectRes.data;
  console.log("project: " + project);

  return {
    props: { project },
  };
}

const Details = (props) => {
  const project = props.project;
  console.log("here:" + project);
  return (
    <div className="bg-gray-10">
      <ProjectDetails detailsProps={project} />
    </div>
  );
};

export default Details;

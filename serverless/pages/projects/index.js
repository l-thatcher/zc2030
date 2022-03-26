import Card from "../../Components/Card";
import { getProjectsList } from "../../services/ProjectService";
import React from "react";

export default function Projects(props) {
  const allProjects = props.allProjects;
  console.log("Test1:" + allProjects);
  return (
    <div className="">

      <div className="  gap-4  ">

        <div>
          <h2 className='font-semibold text-3xl py-6 px-10 capitalize font-serif text-gray-700 '>
            ZeroCarbon Projects
          </h2>
          <p className='text-sm text-gray-500 px-10 '>
            Discov
          </p>
        </div>

        <div className="  bg-green-100 justify-end flex grid grid-cols-4 grid-flow-row  ">
          {allProjects.map((project) => (
            // <ProjectCard project={project} key={project.name} />
            <Card className='mt-5' project={project} viewtype={'project'}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projectsRes = await getProjectsList();
  const allProjects = projectsRes.data;

  return {
    props: { allProjects },
    revalidate: 60, //Regenerates page every minute
  };
}

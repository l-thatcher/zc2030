import Card from "../../Components/Card";
import { getProjectsList } from "../../services/ProjectService";
import React from "react";
import ProjectCard from '../../Components/ProjectCard';

export default function Projects(props) {
  const allProjects = props.allProjects;
  console.log("Test1:" + allProjects[1]['id']);
  return (
    <div className="px-36 py-12">

      <div className="  gap-4  ">

        <div>
          <h2 className='font-semibold text-3xl py-6 px-10 capitalize font-serif text-gray-700 '>
            ZeroCarbon Projects
          </h2>
          <p className='text-sm text-gray-500 px-10 '>

          </p>
        </div>

        <div className=" grid lg:grid-cols-3 gap-10  ">

          {allProjects.map((project) => (
            <Card className='mt-5' project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const projectsRes = await getProjectsList();
  const allProjects = projectsRes.data;

  return {
    props: { allProjects },
    // revalidate: 60, //Regenerates page every minute
  };
}

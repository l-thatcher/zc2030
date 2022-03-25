import styles from "../styles/Home.module.css";
import ProjectCard from "../Components/ProjectCard";
import { getProjectsList } from "../services/ProjectService";

const calculatorImg = "/calculator-logo.png";
const discoverImg = "/discover-logo2.png";
const purchaseImg = "/purchase-logo.png";
const offsetImg = "/offset-logo.png";
const profileImg = "/profile-default.png";
const treeBackground = "/treeBackground.mp4";

export default function Home(props) {
  const allProjects = props.allProjects;
  return (
    <div className={styles.container}>
      <div className='overflow-hidden fixed z-0 h-full pb-96'>
        <video autoPlay loop muted className={styles.video}>
          <source src={treeBackground} type="video/mp4"/>
        </video>
      </div>
      <main className='flex flex-col relative z-10'>
        <div className='p-3 w-full flex justify-between h-5/6'>
          <div className=''>
            <h1 className={styles.summaryHeader}>Are you carbon neutral?</h1>
            <p className={styles.summaryPara}>
              Carbon Neutrality is important.. lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className='hidden sm:block text-black text-2xl flex flex-col mx-20 pr-40'>
            <div className={styles.prompts}>
              <img
                className={styles.promptImages}
                src={calculatorImg}
                srcSet={calculatorImg}
                alt="Calculator"
              />
              <p className={styles.promptText}>Calculate</p>
            </div>

            <div className={styles.prompts}>
              <img
                className={styles.promptImages}
                src={discoverImg}
                srcSet={discoverImg}
                alt="Discover"
              />
              <p className={styles.promptText}>Discover</p>
            </div>

            <div className={styles.prompts}>
              <img
                className={styles.promptImages}
                src={purchaseImg}
                srcSet={purchaseImg}
                alt="Calculate"
              />
              <p className={styles.promptText}>Purchase</p>
            </div>

            <div className={styles.prompts}>
              <img
                className={styles.promptImages}
                src={offsetImg}
                srcSet={offsetImg}
                alt="Calculate"
              />
              <p className={styles.promptText}>Offset</p>
            </div>
          </div>
        </div>

        <div className='min-h-1/3 p-3 text-black bg-white w-full'>
          <h1 className={styles.projectsHeader}>Newest Carbon Projects</h1>
          <div style={{display: "flex", flexDirection:"row", width:"100%", overflow:"scroll"}}>
            {allProjects.map((project) => (
                // <ProjectCard project={project} key={project.name} />
                <ProjectCard project={project} key={project.name}/>
            ))}
          </div>
        </div>

        <div className={styles.teamBackground}>
        <div className="px-0 h-fit py-3">

            <h1 className="text-white pl-2 pb-2">Meet the team</h1>

            <div className='overflow-scroll flex flex-row w-full'>
              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
                <p className="hidden sm:block text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
                <p className="hidden sm:block text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
                <p className="hidden sm:block text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
                <p className="hidden sm:block text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
                <p className="hidden sm:block text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const projectsRes = await getProjectsList();
  const allProjects = projectsRes.data.slice(-5);

  return {
    props: { allProjects },
    revalidate: 60, //Regenerates page every minute
  };
}

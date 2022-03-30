import styles from "../styles/Home.module.css";
import ProjectCard from "../Components/ProjectCard";
import {getListedProjectsList} from "../services/ProjectService";

const calculatorImg = "/calculator-logo.png";
const discoverImg = "/discover-logo2.png";
const purchaseImg = "/purchase-logo.png";
const offsetImg = "/offset-logo.png";
const profileImg = "/profile-default.png";
const treeBackground = "/compressedBackground.mp4";


export default function Home(props) {
  const allProjects = props.allProjects;
  return (
    <div className={styles.container}>
      <div className='overflow-hidden fixed z-0 h-full pb-96'>
        <div className='bg-black'>
          <video autoPlay loop muted className={styles.video}>
            <source src={treeBackground} type="video/mp4"/>
          </video>
        </div>

      </div>
      <main className='flex flex-col relative'>
        <div className='p-3 w-full flex justify-between h-5/6'>
          <div className='pt-40 sm:pt-0'>
            <div className={styles.summaryHeader}>
              <h1 className='text-white uppercase text-7xl font-light pb-8 pl-5'>Are you carbon neutral?</h1>
            </div>
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

        <div className='min-h-1/3 p-3 text-black bg-white w-full overflow-x-auto'>
          <div className='px-0 block md:hidden'>
            <div className={styles.projectsHeader}>
              <h1 className='text-black uppercase font-extralight pb-8 pl-5'>Newest Carbon Projects</h1>
            </div>
            <div style={{display: "flex", flexDirection:"column", width:"100%", overflow:"scroll"}}>
              {allProjects.map((project) => (
                  // <ProjectCard project={project} key={project.name} />
                  <div className='py-2'>
                    <ProjectCard project={project} key={project.name}/>
                  </div>
              ))}
            </div>
          </div>

          <div className='px-32 hidden md:block'>
            <div className={styles.projectsHeader}>
              <h1 className='text-black uppercase font-extralight pb-8 pl-5'>Newest Carbon Projects</h1>
            </div>
            <div className='flex overflow-x-scroll pb-10 scrollbar-hide' style={{display: "flex", flexDirection:"row", width:"100%", overflow:"scroll"}}>
              {allProjects.map((project) => (
                  // <ProjectCard project={project} key={project.name} />
                  <div style={{width: "50rem"}}>
                    <ProjectCard project={project} key={project.name}/>
                  </div>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.teamBackground}>
        <div className="h-fit py-3">
          <div className='hidden sm:block px-32'>
            <h1 className="text-black uppercase font-extralight pb-8 pl-5">Who's involved?</h1>

            <div className='overflow-scroll flex flex-row w-full scrollbar-hide'>
              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={'/peterTrott.jpg'}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={'/alfredB.jpg'}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Alfred Bwomezi </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={'/alun.jpg'}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Alun Jones </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Tim Edwards </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

            </div>
          </div>


          <div className='block sm:hidden px-0'>
            <h1 className="text-black uppercase font-extralight pb-8 pl-5">Who's involved?</h1>

            <div className='overflow-scroll flex flex-row w-full'>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>

              <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto mx-2"
                     src={profileImg}
                     srcSet={profileImg}
                     alt="CEO"/>
                <h1 className="text-lg text-gray-700"> Peter Trott </h1>
                <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const projectsRes = await getListedProjectsList();
  const allProjects = projectsRes.data.slice(-5);

  return {
    props: { allProjects },
  };
}

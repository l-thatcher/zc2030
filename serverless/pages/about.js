import styles from "../styles/About.module.css";

const groupImg = "/group-placeholder.jpeg";
const profileImg = "/profile-default.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className='flex flex-col'>
        <div>
          <div className={styles.openingBox}>

            <div className="p-12">
              <h1 className="text-white uppercase text-5xl left-40 font-light">We're ZC30</h1>
              <p className="text-white text-xl">
                We at zero carbon 30 aim to get everyone's carbon use to 0 by the
                year 2030.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam placerat enim et sapien congue venenatis. Aenean viverra ex
                nec sapien condimentum, non blandit mi ullamcorper. Maecenas
                condimentum venenatis tempor. Nunc pulvinar metus eget dolor
                sollicitudin dictum. Duis sagittis suscipit fringilla. Integer
                rhoncus congu. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam placerat enim et sapien congue venenatis. Aenean
                viverra ex nec sapien condimentum, non blandit mi ullamcorper.
                Maecenas condimentum venenatis tempor. Nunc pulvinar metus eget
                dolor sollicitudin dictum. Duis sagittis suscipit fringilla.
                Integer rhoncus congue
              </p>
            </div>
            <img
                src={groupImg}
                srcSet={groupImg}
                className="hidden sm:block h-52 flex items-center mb-8 px-16 justify-center"
                alt="The team"
            />
          </div>



          <div className="h-32 w-full relative overflow-hidden">
            <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path fill="#57BC90FF" fillOpacity="0.5" d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,128C672,117,768,171,864,160C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
            </svg>

            <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path fill="#77C9D4FF" fillOpacity="0.5" d="M0,64L30,90.7C60,117,120,171,180,192C240,213,300,203,360,218.7C420,235,480,277,540,250.7C600,224,660,128,720,101.3C780,75,840,117,900,122.7C960,128,1020,96,1080,117.3C1140,139,1200,213,1260,224C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"/>            </svg>

            <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path fill="#57BC90FF" fillOpacity="0.5" d="M0,32L48,58.7C96,85,192,139,288,138.7C384,139,480,85,576,106.7C672,128,768,224,864,234.7C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
            </svg>

            <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path fill="#77C9D4FF" fillOpacity="0.5" d="M0,128L34.3,117.3C68.6,107,137,85,206,69.3C274.3,53,343,43,411,53.3C480,64,549,96,617,133.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,122.7C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"/>
            </svg>
          </div>
        </div>


        <div className="min-h-30 p-0 sm:p-10 pb-3">
          <h1 className="text-black uppercase font-extralight pb-8 pl-5">Meet the team</h1>

          <div className="flex flex-row overflow-x-auto">
            <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
              <img className="mb-6 w-fit h-50 shadow-lg mx-auto mx-2"
                   src={profileImg}
                   srcSet={profileImg}
                   alt="CEO"/>
              <h1 className="text-lg text-gray-700"> Peter Trott </h1>
              <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <h3 className="text-lg text-gray-700"> email@address.com </h3>
            </div>

            <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
              <img className="mb-6 w-fit h-50 shadow-lg mx-auto mx-2"
                   src={profileImg}
                   srcSet={profileImg}
                   alt="CEO"/>
              <h1 className="text-lg text-gray-700"> Peter Trott </h1>
              <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <h3 className="text-lg text-gray-700"> email@address.com </h3>
            </div>

            <div className="bg-white font-semibold text-center rounded-3xl border w-96 p-8 mx-2">
              <img className="mb-6 w-fit h-50 shadow-lg mx-auto mx-2"
                   src={profileImg}
                   srcSet={profileImg}
                   alt="CEO"/>
              <h1 className="text-lg text-gray-700"> Peter Trott </h1>
              <h3 className="text-sm text-gray-400 px-16"> CEO </h3>
              <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <h3 className="text-lg text-gray-700"> email@address.com </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

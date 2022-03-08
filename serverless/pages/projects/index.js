import styles from "../../styles/ProjectCard.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { projects: data },
    };
};

const Projects = ({ projects }) => {
    console.log(projects);
    return (
        <div className="bg-blue-400 py-24 flex items-center justify-center flex">
            <div className="bg-zc30-green rounded-lg w-1/7">
                <div className="border-white border-3 rounded-lg">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
                            className="card-img rounded-t-lg h-60 w-full object-cover"
                        />

                        <div className="absolute bottom-0 right-0">
                            <h2 className="p-0.5 bg-opacity-70 rounded-3 bg-zc30-blue text-black text-center font-light mb-1 position-relative shadow-inner shadow-lg">
                                £51/ C tonne
                            </h2>
                        </div>
                    </div>

                    <h2 className="text-white text-xxl-center text-center font-light mb-1 position-relative flex-center shadow-lg">
                        Breccon Wind Energy
                    </h2>
                </div>

                <div className="p-2 position-relative text-center">
                    <div className="flex justify-center">
                        <div className=" items-center">
                            <img
                                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                                className="w-5 h-5 align-content-center"
                            />
                        </div>
                        <p className="flex font-light text-lg">
                            Breccon Beacons National Reserve
                        </p>
                    </div>

                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        More details
                    </button>
                </div>

                {/*add progress bar here*/}
                <footer className="bg-gray-100 rounded-b-lg text-right py-1 px-8 text-xs text-gray-500"></footer>
            </div>

        </div>
    );
};

export default Projects;


import {LocationMarkerIcon} from '@heroicons/react/solid'
// import image1 from '../public/image1.jpg'
// import image2 from '../public/image2.jpg'
// import image3 from '../public/7a5d17d22fbcb9629f6224458481884b.jpeg'
// import image4 from '../public/Bogdkhan_Uul_Strictly_Protected_Area,_Mongolia_(149199747).jpg'
// import image5 from '../public/9a08-20140530-everdale.jpg'

import ProjectImageCard from "./ProjectImageCard";
import BuyCard from "./BuyCard";




import {FiGlobe, FiFacebook} from "react-icons/fi"


function ProjectDetails(props) {





    // const images2 = [image1,image2,image3,image4,image5]

    const imgs= ["https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg",
        "https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/600x400/public/media/int_files/1012343_edited-1.jpg?h=f452ebb1&itok=OjAEUXwX",
        "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2021/05/AdobeStock_113406376_900x506.jpg",
        "https://spca.bc.ca/wp-content/uploads/red-barn-on-farm-in-summer-e1606851289222.jpg",
       "https://images.squarespace-cdn.com/content/v1/548af91fe4b0b9b9be1989a8/1612445276928-SEGCMEH5DGQTZHCB3QEI/20201014_115940.jpg?format=1500w"
        ]

    return (
        <div className="lg:flex lg:items-center lg:justify-between container   ">
            <div className="flex-1 min-w-0">

                <main className="  ">
                    {/*Name*/}
                    <div className=' mt-10'>
                        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Elveden farm {props.name}</h1>

                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                {/*location*/}
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                                Elveden Estate {props.location} | Norfolk, United Kingdom {props.location}
                            </div>

                            {/*Date*/}
                            {/*<div className="mt-2 flex items-center text-sm text-gray-500">*/}
                            {/*    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                            {/*    Closing on January 9, 2020*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <section>

                        <div className=" mt-3">
                            <div
                                className="  ">

                                <div className='md:'>
                                    <ul className='flex overflow-x-auto gap-6 snap-x snap-mandatory'>
                                        {imgs.map((image,index) => (
                                            <li  className='shrink-0 snap-center'>
                                                <ProjectImageCard key={index} img={image} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/*<div className="sm:w-3/4 md:w-full md:col-span-2 md:row-span-3 shrink-0 ">*/}
                                {/*    <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'*/}
                                {/*        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"*/}
                                {/*        alt="image"/>*/}
                                {/*</div>*/}
                                {/*<div className="sm:w-3/4 md:w-full rounded shrink-0">*/}
                                {/*    <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'*/}
                                {/*        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"*/}
                                {/*        alt="image"/>*/}
                                {/*</div>*/}
                                {/*<div className="sm:w-3/4 md:w-full rounded shrink-0">*/}
                                {/*    <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'*/}
                                {/*        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"*/}
                                {/*        alt="image"/>*/}
                                {/*</div>*/}
                                {/*<div className="sm:w-full md:w-full rounded shrink-0">*/}
                                {/*    <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'*/}
                                {/*        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"*/}
                                {/*        alt="image"/>*/}
                                {/*</div>*/}
                                {/*<div className="sm:w-3/4 md:w-full rounded shrink-0">*/}
                                {/*    <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'*/}
                                {/*        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"*/}
                                {/*        alt="image"/>*/}
                                {/*</div>*/}
                            </div>
                        </div>


                        {/*ABOUT Project*/}
                        <div className='mt-4'>

                            <div>
                                <h2 className="text-2xl font-normal leading-7 text-gray-900 sm:text-3xl sm:truncate">About Project</h2>
                            </div>

                            <div>

                                {/*//profile picture*/}
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                        className="rounded-full w-20 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>

                            </div>



                            <div className="mt-4">
                                <div className='flex items-center bg-blue-500'>

                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                            className="rounded-full w-20 shadow-lg"
                                            alt="Avatar"
                                        />
                                        <div className='mt-4 p-2'>
                                            <h5 className="text-xl font-medium leading-tight mb-2">John Doe {props.creator}</h5>
                                            <p className="text-gray-500">farm Owner {props.type}</p>
                                        </div>

                                    <div className=" bg-black" role="group">
                                        <button type="button" className="py-6 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 rounded-md shadow-sm  ">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                <FiGlobe/>
                                            </span>
                                        </button>

                                        <button type="button" className=" ml-7  p-6 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 rounded-md shadow-sm  "
                                            >
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                    <FiFacebook/>
                                            </span>

                                            </button>

                                    </div>


                                </div>
                                <div className='flex flex-wrap justify-center -mx-4'><BuyCard/></div>


                            </div>



                        </div>


                    </section>

                </main>

            </div>


        </div>
    )
}

export default ProjectDetails;

// import {LocationMarkerIcon,CalendarIcon} from '@heroicons/react/solid'
// import image1 from '../public/image1.jpg'
// import image2 from '../public/image2.jpg'
// import image3 from '../public/7a5d17d22fbcb9629f6224458481884b.jpeg'
// import image4 from '../public/Bogdkhan_Uul_Strictly_Protected_Area,_Mongolia_(149199747).jpg'
// import image5 from '../public/9a08-20140530-everdale.jpg'

import ProjectImageCard from "./ProjectImageCard";
import AboutProject from "./AboutProject";
import BuyCard from "./BuyCard";
import {FiGlobe, FiFacebook} from "react-icons/fi"
import Map from './Map'


function ProjectDetails(props) {

    // const images2 = [image1,image2,image3,image4,image5]

    const imgs= ["https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg",
        "https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/600x400/public/media/int_files/1012343_edited-1.jpg?h=f452ebb1&itok=OjAEUXwX",
        "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2021/05/AdobeStock_113406376_900x506.jpg",
        "https://spca.bc.ca/wp-content/uploads/red-barn-on-farm-in-summer-e1606851289222.jpg",
       "https://images.squarespace-cdn.com/content/v1/548af91fe4b0b9b9be1989a8/1612445276928-SEGCMEH5DGQTZHCB3QEI/20201014_115940.jpg?format=1500w"
    ]


    const lat = 51.509865
    const lng = -0.118092
    const location = {lat,lng}



    return (
        <div className="lg:flex lg:items-center lg:justify-between container     ">
            <div className="flex-1 min-w-0">

                <main className="  ">

                    {/*Name*/}
                    <div className=' mt-10'>
                        <h1 className="text-[42px] font-semibold leading-7 text-gray-900 sm:text-3xl sm:truncate">{props.detailsProps.projectname}</h1>

                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500 underline border-b mb-2 border-[#F2F2F2] capitalize">
                                {/*location*/}
                                {/*<LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />*/}
                                Elveden Estate {props.detailsProps.city} | Norfolk, United Kingdom {props.detailsProps.county} {props.detailsProps.country}
                            </div>


                        </div>
                    </div>

                    <section>

                        <div className=" mt-3">

                                <div className='md:hidden'>
                                    <ul className='flex overflow-x-auto gap-6 snap-x snap-mandatory '>
                                        {imgs.map((image,index) => (
                                            <li  className='shrink-0 snap-center'>
                                                <ProjectImageCard key={index} img={image} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>



                                <div className="grid-cols-4 space-y-2  md:space-y-0 md:grid md:gap-3  ">
                                    <div className="w-full  col-span-2 row-span-2 rounded ">
                                        {imgs.map((image,index) => (
                                            <li  className='shrink-0 snap-center'>
                                                <ProjectImageCard key={index} img={image} />
                                            </li>
                                        ))}
                                    </div>
                                </div>

                            <div className="hidden md:block  ">
                                <div className="grid-cols-4 space-y-2  md:space-y-0 md:grid md:gap-3  ">
                                    <div className="w-full  col-span-2 row-span-2 rounded ">
                                        <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="image"/>
                                    </div>
                                    <div className=" w-full rounded ">
                                        <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="image"/>
                                    </div>
                                    <div className="w-full rounded ">
                                        <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="image"/>
                                    </div>
                                    <div className="w-full rounded ">
                                        <img className='rounded-xl hover:scale-105 transition duration-200 ease-in-out'
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="image"/>
                                    </div>
                                    <div className="w-full rounded ">
                                        <img className ='rounded-xl hover:scale-105 transition duration-200 ease-in-out'
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="image"/>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/*ABOUT Project*/}
                        <div className='mt-4 border-t border-[#F2F2F2] p-4'>
                            {/*BUY Carbon*/}
                            <div className="mt-1 md:hidden">
                                <div className=''>
                                    <h2 className="font-bold  mb-1 text-[34px] text-green-600 pb-3 ">
                                        £30 {props.cptgbp}
                                        <span className="text-base text-body-color text-black  font-medium">/ tCo2e
                                         </span>
                                    </h2>
                                    <p className='font-semibold text-gray-400'> Total Supply: {props.totalsupply} </p>
                                    <p className='font-semibold text-gray-400' > Available Supply: {props.remainingsupply} </p>
                                    <p className='font-bold'>How many tonnes of carbon would you like to buy?</p>
                                    <input className='w-full form-control border border-solid border-gray-300 rounded block px-6 py-2.5 mb-3' type="number" placeholder='/tCo2e'/>
                                    <button type="button"
                                            className="mb-2 w-full inline-block px-6 py-2.5 bg-green-500 text-white font-medium
                                             text-xs leading-normal uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg
                                            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800
                                              active:shadow-lg transition duration-150 ease-in-out">Buy Carbon
                                    </button>
                                </div>

                            </div>



                            {/*Header*/}
                            <div className='flex'>
                                <div>
                                    <AboutProject/>
                                </div>
                                <div className="hidden md:block ">
                                    <BuyCard />
                                </div>

                            </div>



                            {/*Where are we based?*/}
                            <div>
                                <h3 className='flex justify-between items-center py-3 w-full font-normal text-left text-gray-900 rounded-t-xl  '>
                                    <span>Where are we based ?</span>
                                </h3>
                                <div className="mt-2 flex items-center text-sm text-gray-500 border-b border-[#F2F2F2] capitalize">
                                    {/*location*/}
                                    {/*<LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />*/}
                                    Elveden Estate {props.streetname} | Norfolk, United Kingdom {props.city} {props.county} {props.country}
                                </div>
                                <Map location={location} />

                                <div>

                                </div>
                            </div>



                        </div>


                    </section>

                </main>

            </div>


        </div>
    )
}

export default ProjectDetails;
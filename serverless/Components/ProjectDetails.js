
import {LocationMarkerIcon,CalendarIcon} from '@heroicons/react/solid'
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
        <div className="lg:flex lg:items-center lg:justify-between container   max-w-7xl  ">
            <div className="flex-1 min-w-0">

                <main className="  ">
                    {/*Name*/}
                    <div className=' mt-10'>
                        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Elveden farm {props.name}</h1>

                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500 border-b border-[#F2F2F2] capitalize">
                                {/*location*/}
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                                Elveden Estate {props.location} | Norfolk, United Kingdom {props.location}
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

                            <div className="hidden md:block">
                                <div className="grid-cols-3  pr-20 pb-20 space-y-2   md:space-y-0 md:grid md:gap-3 md:grid-rows-3 ">
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


                            <div className='flex  items-center'>

                                {/*//profile picture*/}
                                <div className=''>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"

                                        className="rounded-full h-16 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>

                                {/*//name*/}
                                <div className=' mt-6 px-2'>
                                    <div>
                                        <h6 className=" capitalize">John Doe {props.creator}</h6>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 capitalize">farm Owner {props.type}</p>
                                    </div>

                                </div>

                                {/*//socials*/}
                                <div className='flex px-10'>
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900  ">
                                                <FiGlobe/>
                                    </span>

                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900 ml-4">
                                                    <FiFacebook/>
                                    </span>
                                </div>

                            </div>

                            <div className=''>
                                {/*Date*/}
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                     January 9, 2020 {props.date}
                                </div>
                                <div className='border-b border-[#F2F2F2] w-20 pt-2 g'>

                                </div>
                            </div>

                            {/*Header*/}
                            <div>
                                <h2 className='flex justify-between items-center py-3 w-full font-medium text-left text-gray-900 rounded-t-xl border-b border-gray-200 dark:border-gray-700 dark:text-white'>
                                    <span>About This Project</span>
                                </h2>
                            </div>

                            {/*Description*/}

                            <div className='mt-6 '>
                                <p className="text-gray-500 line-clamp-4 ">laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                    Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
                                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                                    Cum sociis natoque penatibus et magnis dis parturient {props.description}</p>
                            </div>

                            <div className=' border-b border-gray-200'>
                                <p className="text-gray-500 line-clamp-4 underline text-black font-bold "> Show more > </p>
                            </div>




                            <div className="mt-4">
                                <div className='flex items-center bg-blue-500'>

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
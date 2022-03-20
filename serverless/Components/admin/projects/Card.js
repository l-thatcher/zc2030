import React, {useState} from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import EditProject from "./EditProject";




const Card = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const project= props.projects




    function changeView() {
        console.log("true")
        setShowModal(true)
    }
        // storing input name

    console.log((project.remainingsupply/project.totalsupply)*100)
    const widthPercentage = (project.remainingsupply/project.totalsupply)*100
    console.log(project)

    return(
        <div className="inline-block px-3">

            <Modal size="large" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <EditProject projects={project} />
                </ModalBody>

            </Modal>


            <div className="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-104 transition duration-200 ease-in-out">
                <img
                    src={project.projectimage1}
                    alt="uploaded cover image"
                    className="object-cover h-1/2 w-full rounded-lg rounded-b-none"/>
                <h5 className=' ml-5 font-bold font-serif'>{project.projectname}  </h5>

                    <div className="mt-2 ml-5 flex items-center text-sm text-gray-500 underline mb-2 ml-4 capitalize">
                        {/*location*/}
                        {project.streetname} | {project.city} {project.county} {project.country}
                    </div>

                <div className='flex items-center '>

                    {/*<div>*/}
                    {/*    <h5 className='font-sans text-xs '>Remaining  </h5>*/}
                    {/*    <h5 className='font-sans text-xs'> supply</h5>*/}
                    {/*</div>*/}

                    <div>
                        <div className="w-[180px] ml-5 bg-gray-200 rounded-full">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                                style={{width: "25%" }}> {widthPercentage}%

                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end">

                    <button
                        className=" mt-6 mr-5 bg-gray-700 active:bg-blue-600 text-white font-bold capitalize text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button" onClick={changeView}>
                        Edit
                    </button>

                </div>



            </div>
        </div>

    )

}



export default Card;
import React, { useState} from "react";

import {editProjectById} from '../../../services/ProjectService'
// components
import { AiFillCloseCircle } from "react-icons/ai";
// import IndexDropdown from "components/Dropdowns/IndexDropdown.js"

const EditProject =(props)=> {

    const current = props.projects;

    const [projectname, setProjectname] = useState(current.projectname);
    const [cptgbp, setCptgbp] = useState(current.cptgbp);
    const [latitude, setLatitude] = useState(current.latitude);
    const [longitude, setLongitude] = useState(current.longitude);
    const [streetname, setStreetname] = useState(current.streetname);
    const [city, setCity] = useState(current.streetname);
    const [county, setCounty] = useState(current.county);
    const [country, setCountry] = useState(current.country);
    const [totalsupply, setTotalsupply] = useState(current.totalsupply);
    const [ownername, setOwnername] = useState(current.ownername);
    const [type, setType] = useState(current.type);
    const [website, setWebsite] = useState(current.website);
    const [description, setDescription] = useState(current.description);
    const [datefounded, setDatefounded] = useState(current.datefounded);
    const [nftaddress, setNftaddress] = useState(current.nftaddress);

    let projectimage1= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/farm-quotes-1580917869.jpg?crop=0.723xw:1.00xh;0.189xw,0&resize=640:*'
    let projectimage2= 'https://www.immunology.org/sites/default/files/Farm%20barn%20small.jpg'
    let projectimage3= 'https://www.greenqueen.com.hk/wp-content/uploads/2020/12/Veganic-Farming.png'
    let projectimage4= 'https://i.guim.co.uk/img/media/92ff23fe9c9b9372d2bf6bc5f58b5317d09640ba/140_163_3360_2017/master/3360.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a50edccf40f1867e8ae0407b8f249ef2'
    let projectimage5= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagVhujggQsNickn5lifRjb4EQzXgYvuaoyaqY06JjzDmgf6BLQ0qQGJQm-gUs0YQkNu4&usqp=CAU'
    let ownerpic = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    const project= {projectname:projectname,cptgbp:parseFloat(cptgbp),latitude:parseFloat(latitude),longitude:parseFloat(latitude),streetname:streetname
                    , city:city, county:county,
                country:country,totalsupply:parseFloat(totalsupply),remainingsupply:totalsupply,ownerpicture:ownerpic
        ,type:type,website:website,description:description,datefounded:datefounded,ownername:ownername,
        projectimage1:projectimage1,projectimage2:projectimage2,projectimage3:projectimage3,projectimage4:projectimage4,
        projectimage5:projectimage5,
        nftaddress:nftaddress}
    const handleSubmit = async (e) => {

        e.preventDefault();
                try {
                    console.log(project)
                    await editProjectById(project,current.id)
                } catch (err) {
                    console.log(err);
                }
    }


    return (
        <>

            <div
                className="relative flex flex-col min-w-0 break-words w-[750px] m-4 mb-6 shadow-lg rounded-lg bg-blue-50 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 bg-gray-50 text-xl font-bold">Edit Project</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Project Information
                        </h6>
                        {/*Image uploade*/}
                        <div>
                            <label className="block text-sm font-medium text-gray-700"> Image </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file" className="relative cursor-pointer  rounded-md font-medium text-blue-300 hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-300">
                                            <span>Upload a file</span>
                                            {/*<input id="file" name="file" multiple type="file" className="sr-only" accept="image/png, image/jpeg"*/}
                                            {/*       onChange={onFileChange}/>*/}
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={projectname} onChange={(e) => setProjectname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        NFT address
                                    </label>
                                    <input value={nftaddress}
                                        required
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                         onChange={(e) => setNftaddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Total Supply
                                    </label>
                                    <input value={totalsupply}
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                         onChange={(e) => setTotalsupply(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Cost per tonne of co2
                                    </label>
                                    <input value={cptgbp}

                                        type="number" onChange={(e) => setCptgbp(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Date project Was founded:
                                    </label>
                                    <input value={datefounded}
                                        type="date"
                                        value="2018-07-22"
                                        onChange={(e) => setDatefounded(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">

                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        About Project
                                    </label>
                                    <textarea value={description}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="4" onChange={(e) => setDescription(e.target.value)}

                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Location Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Address
                                    </label>
                                    <input value={streetname}
                                        type="text" onChange={(e) => setStreetname(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        City
                                    </label>
                                    <input onChange={(e) => setCity(e.target.value)}
                                           value={city}
                                           required
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        County/State
                                    </label>
                                    <input onChange={(e) => setCounty(e.target.value)}
                                           type="text"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           value={county}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Country
                                    </label>
                                    <input onChange={(e) => setCountry(e.target.value)}
                                           type="text"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           value={country}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        latitude
                                    </label>
                                    <input onChange={(e) => setLatitude(e.target.value)}
                                           type="number" step="0.01"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           value={latitude}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        longitude
                                    </label>
                                    <input onChange={(e) => setLongitude(e.target.value)}
                                           type="number" step="0.01"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           value={longitude}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            About Owner
                        </h6>

                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Owner Name
                                </label>
                                <input
                                    required
                                    onChange={(e) => setOwnername(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value={ownername}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Type of Owner
                                </label>
                                <input onChange={(e) => setType(e.target.value)}
                                       type="text"
                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       value={type}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    website
                                </label>
                                <input onChange={(e) => setWebsite(e.target.value)}
                                       type="string"
                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       value={website}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent
                    rounded-full shadow-sm text-sm font-medium bg-gray-700 active:bg-blue-600 text-white font-bold capitalize
                     hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                            >Create Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditProject;



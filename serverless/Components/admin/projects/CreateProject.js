import React, {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'
import {createNewProject} from '../../../services/ProjectService'
import Link from 'next/link'

// components
import {AiFillCloseCircle} from "react-icons/ai";
// import IndexDropdown from "components/Dropdowns/IndexDropdown.js"

const CreateProject = () => {
    const [projectname, setProjectname] = useState('');
    const [cptgbp, setCptgbp] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [streetname, setStreetname] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [country, setCountry] = useState('');
    const [totalsupply, setTotalsupply] = useState('');
    const [ownername, setOwnername] = useState('');
    const [type, setType] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [ownerpic,setOwnerpic] = useState('');
    const [datefounded, setDatefounded] = useState('');
    const [projectImg1, setProjectImg1] = useState('');
    const [projectImg2, setProjectImg2] = useState('');
    const [projectImg3, setProjectImg3] = useState('');
    const [projectImg4, setProjectImg4] = useState('');
    const [projectImg5, setProjectImg5] = useState('');

    const project= {projectname:projectname,cptgbp:parseFloat(cptgbp),latitude:parseFloat(latitude),longitude:parseFloat(longitude),streetname:streetname
                    , city:city, county:county,
                country:country,totalsupply:parseFloat(totalsupply),remainingsupply:totalsupply,ownerpicture:ownerpic
        ,type:type,website:website,description:description,datefounded:datefounded,ownername:ownername,
        projectimage1:projectImg1,projectimage2:projectImg2,projectimage3:projectImg3,projectimage4:projectImg4,
        projectimage5:projectImg5}

    const router = useRouter()
    const handleSubmit = async (e) => {

        e.preventDefault();

                    await createNewProject(project).then(res => {
                        if (res.status === 200)
                            toast.success('Success! project has been created', {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        router.push('/adminDashboard')} )
                        .catch(err => {
                            console.log(err);
                        });

        }

    return (
        <>

            <div
                className="relative flex flex-col min-w-0 break-words m-10 shadow-lg rounded-lg bg-blue-50 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 bg-gray-50 text-xl font-bold">Create New Project</h6>
                    </div>
                </div>

                <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                />

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Project Information
                        </h6>
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
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="The hackney farm" onChange={(e) => setProjectname(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Date project Was founded:
                                    </label>
                                    <input
                                        type="date"
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
                                        Total Supply
                                    </label>
                                    <input
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="1000" onChange={(e) => setTotalsupply(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Cost per tonne of co2
                                    </label>
                                    <input
                                        placeholder='30£'
                                        type="number" onChange={(e) => setCptgbp(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        About Project
                                    </label>
                                    <textarea
    type="text"
    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    rows="4" onChange={(e) => setDescription(e.target.value)}
    placeholder="A beautiful farm with lots of animals "
    />
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
                                    <input
                                        type="text" onChange={(e) => setStreetname(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
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
                                           required
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="New York"
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
                                           placeholder="Essex"
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
                                           placeholder="United Kingdom"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
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
                                           placeholder="-20"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
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
                                           placeholder="0.5"
                                    />
                                </div>
                            </div>
                            <div className='text-sm text-gray-400'>
                                <p>find co-ordinates here -
                                    <a target="_blank" href="https://www.gps-coordinates.net/" rel="noopener noreferrer">
                                        <p>https://www.gps-coordinates.net/</p>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            About Owner
                        </h6>

                        <div className="flex flex-wrap">
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
                                        placeholder="Jack Smith"
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
                                           placeholder="Farm owner"
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
                                    <input
                                        required
                                        onChange={(e) => setOwnerpic(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        pattern="https?://.+"
                                        placeholder="https://www.cardiff.com"
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Project Images
                        </h6>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Image 1
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Image 1"
                                        onChange={(e) => setProjectImg1(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Image 2
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Image 2"
                                        onChange={(e) => setProjectImg2(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Image 3
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Image 3"
                                        onChange={(e) => setProjectImg3(e.target.value)}
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
                                        Image 4
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => setProjectImg4(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Image 4"
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Image 5
                                    </label>
                                    <input
                                        placeholder="Image 5"
                                        type="text"
                                        onChange={(e) => setProjectImg5(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Image 6
                                    </label>
                                    <input
                                        placeholder="Image 6"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
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

export default CreateProject;

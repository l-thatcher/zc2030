import LoginSession from "../LoginSession";
import Link from "next/link";
import React, { useState } from "react"




const Navbar = () => {
  const logo = "/logo100px.png";


  return (
          <nav className=" ">
              <div className=" mx-auto px-4">
                  <div className="flex justify-between">
                      <div className="flex space-x-7">
                          <div>
                              {/*Website Logo*/}
                              <Link href="/">
                                  <a  className="flex items-center no-underline py-4 px-2">
                                      <img src={logo}lt="Logo" className=" mr-2"/>
                                  </a>
                              </Link>
                          </div>
                          {/*Primary Navbar items */}
                          <div className="hidden md:flex items-center px-5 lg:mx-auto lg:space-x-8 xl:space-x-14 ">
                              <Link href="/">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">Home</a>
                              </Link>
                              <Link href="/about">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">About</a>
                              </Link>
                              <Link href="/projects">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Projects</a>
                              </Link>
                              <Link href="/calculator">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Calculator</a>
                              </Link>
                              {/*<Link href="/about">*/}
                              {/*  <a href=""*/}
                              {/*     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition no-underline duration-300">Contact*/}
                              {/*      Us</a>*/}
                              {/*</Link>*/}
                          </div>
                      </div>
                      {/*Secondary Navbar items*/}
                      <div className="hidden md:flex items-center space-x-3 ">
                          <LoginSession/>
                      </div>
                      {/*Mobile menu button*/}
                      <div className="md:hidden flex items-center">
                          <button className="outline-none mobile-menu-button" onClick={()=> setMobileOpen()}>
                              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                   x-show="!showMenu"
                                   fill="none"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                              >
                                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>

              <div className=" bg-white hidden mobile-menu">
                  <ul className="">
                      <li className="active"><a href="index.html"
                                                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a>
                      </li>
                      <li><a href="#services"
                             className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>
                      </li>
                      <li><a href="#about"
                             className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a>
                      </li>
                      <li><a href="#contact"
                             className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact
                          Us</a></li>
                  </ul>
              </div>

          </nav>

  );
};

export default Navbar;

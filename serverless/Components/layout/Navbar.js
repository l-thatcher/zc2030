import LoginSession from "../LoginSession";
import Link from "next/link";
import React, { useState } from "react"




const Navbar = () => {
  const logo = "/cz2030_logo.png";


  return (
      <div>

          <nav className="bg-white border-b border-gray-300 shadow-sm">
              <div className="bg-white max-w-6xl mx-auto px-4">
                  <div className="flex justify-between">
                      <div className="flex space-x-7">
                          <div>
                              {/*Website Logo*/}
                              <Link href="/">
                                  <a  className="flex items-center no-underline py-4 px-2">
                                      <img src={logo}lt="Logo" className="h-8 w-8 mr-2"/>
                                      <span className="font-semibold text-gray-500 text-lg">ZeroCarbon2030</span>
                                  </a>
                              </Link>
                          </div>
                          {/*Primary Navbar items */}
                          <div className="hidden md:flex items-center space-x-1">
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
  {/*  <nav*/}
  {/*    className="relative sticky h-20*/}
  {/*w-full flex flex-wrap items-center justify-between bg-white  hover:text-gray-700*/}
  {/*focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light "*/}
  {/*  >*/}
  {/*    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">*/}
  {/*      <button*/}
  {/*        className=" navbar-toggler text-gray-500 hover:shadow-none hover:no-underline border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"*/}
  {/*        type="button"*/}
  {/*        data-bs-toggle="collapse"*/}
  {/*        data-bs-target="#navbarSupportedContent"*/}
  {/*        aria-controls="navbarSupportedContent"*/}
  {/*        aria-expanded="false"*/}
  {/*        aria-label="Toggle navigation"*/}
  {/*      >*/}
  {/*        <svg*/}
  {/*          aria-hidden="true"*/}
  {/*          focusable="false"*/}
  {/*          data-prefix="fas" data-icon="bars"*/}
  {/*          className="w-6"*/}
  {/*          role="img"*/}
  {/*          xmlns="http://www.w3.org/2000/svg"*/}
  {/*          viewBox="0 0 448 512"*/}
  {/*        >*/}
  {/*          <path*/}
  {/*            fill="currentColor"*/}
  {/*            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"*/}
  {/*          ></path>*/}
  {/*        </svg>*/}
  {/*      </button>*/}
  {/*      <div*/}
  {/*        className="collapse navbar-collapse flex-grow items-center"*/}
  {/*        id="navbarSupportedContent"*/}
  {/*      >*/}
  {/*        <Link href="/">*/}
  {/*          <a*/}
  {/*            className="Flex items-center no-underline text-gray-800 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt- mr-1"*/}
  {/*            href="#"*/}
  {/*          >*/}
  {/*              <div className="h-8 flex">*/}
  {/*                  <img*/}
  {/*                      src="/cz2030_logo-removebg-preview.png"*/}
  {/*                      className="h-full"*/}
  {/*                  />*/}

  {/*                  <h5 className='  text-grey-800 font-semibold items-center'> ZeroCarbon2030</h5>*/}
  {/*              </div>*/}
  {/*          </a>*/}
  {/*        </Link>*/}
  {/*        /!*  Left links *!/*/}
  {/*        <ul className="navbar-nav flex flex-col ml-5 pl-0 list-style-none mr-auto">*/}
  {/*          <li className="nav-item p-2">*/}
  {/*            <Link href="/about">*/}
  {/*              <a*/}
  {/*                className="nav-link no-underline text-gray-800 font-semibold hover:text-green-300"*/}
  {/*                href="#"*/}
  {/*              >*/}
  {/*                About*/}
  {/*              </a>*/}
  {/*            </Link>*/}
  {/*          </li>*/}
  {/*          <li className="nav-item p-2">*/}
  {/*            <Link href="/projects">*/}
  {/*              <a*/}
  {/*                className="nav-link text-gray-800 font-semibold hover:text-green-300  "*/}
  {/*                href="#"*/}
  {/*              >*/}
  {/*                Projects*/}
  {/*              </a>*/}
  {/*            </Link>*/}
  {/*          </li>*/}
  {/*          <li className="nav-item p-2">*/}
  {/*            <Link href="/calculator">*/}
  {/*              <a*/}
  {/*                className="nav-link no-underline text-gray-800 font-semibold hover:text-green-300 focus:text-gray-700"*/}
  {/*                href="#"*/}
  {/*              >*/}
  {/*                Calculator*/}
  {/*              </a>*/}
  {/*            </Link>*/}
  {/*          </li>*/}
  {/*        </ul>*/}
  {/*        /!* <!-- Left links --> *!/*/}
  {/*      </div>*/}

  {/*      /!*Collapsible wrapper *!/*/}

  {/*      /!*Right elements   *!/*/}
  {/*      <div className="flex items-center relative">*/}
  {/*        /!*-- Icon -*!/*/}

  {/*        <div className="dropdown relative">*/}
  {/*          <LoginSession />*/}
  {/*        </div>*/}
  {/*      </div>*/}

  {/*      /!* - Right elements *!/*/}
  {/*    </div>*/}
  {/*  </nav>*/}
      </div>
  );
};

export default Navbar;

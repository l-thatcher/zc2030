import LoginSession from "../LoginSession";
import Link from "next/link";
import React, { useState } from "react"




const Navbar = () => {
  const logo = "/cz2030_logo.png";


  return (
      <div>
    <nav
      className="relative  h-20
  w-full flex flex-wrap items-center justify-between bg-white  hover:text-gray-700
  focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className=" navbar-toggler text-gray-500 hover:shadow-none hover:no-underline border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <Link href="/">
            <a
              className="Flex items-center no-underline text-gray-800 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt- mr-1"
              href="#"
            >
                <div className="h-8 flex">
                    <img
                        src="/cz2030_logo-removebg-preview.png"
                        className="h-full"
                    />

                    <h5 className='  text-grey-800 font-semibold items-center'> ZeroCarbon2030</h5>
                </div>
            </a>
          </Link>
          {/*  Left links */}
          <ul className="navbar-nav flex flex-col ml-5 pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <Link href="/about">
                <a
                  className="nav-link no-underline text-gray-800 font-semibold hover:text-green-300"
                  href="#"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link href="/projects">
                <a
                  className="nav-link text-gray-800 font-semibold hover:text-green-300  "
                  href="#"
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link href="/calculator">
                <a
                  className="nav-link no-underline text-gray-800 font-semibold hover:text-green-300 focus:text-gray-700"
                  href="#"
                >
                  Calculator
                </a>
              </Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>

        {/*Collapsible wrapper */}

        {/*Right elements   */}
        <div className="flex items-center relative">
          {/*-- Icon -*/}

          <div className="dropdown relative">
            <LoginSession />
          </div>
        </div>

        {/* - Right elements */}
      </div>
    </nav>
      </div>
  );
};

export default Navbar;

import React, { useState } from "react";
// import Link from "next/link";
import { Link } from 'react-scroll';
import { useEffect } from 'react';

import dynamic from 'next/dynamic';

const DynamicLink = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      setIsOpen(!isOpen);
    };
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [isOpen]);
  
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
              <DynamicLink
  activeClass="active"
  to="summary"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
                  <a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                    Summary
                  </a>
                </DynamicLink>
                {/* <DynamicLink
  activeClass="active"
  to="details"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Details
            </a>
          </DynamicLink> */}
                <DynamicLink
  activeClass="active"
  to="cfp"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
                  <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                    CFP
                  </a>
                </DynamicLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
        <DynamicLink
  activeClass="active"
  to="summary"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Summary
            </a>
          </DynamicLink>
          <DynamicLink
  activeClass="active"
  to="details"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Details
            </a>
          </DynamicLink>
          <DynamicLink
  activeClass="active"
  to="cfp"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              CFP
            </a>
          </DynamicLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

